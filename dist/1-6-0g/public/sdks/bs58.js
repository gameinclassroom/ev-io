(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.bs58 = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    'use strict'
    // base-x encoding / decoding
    // Copyright (c) 2018 base-x contributors
    // Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
    // Distributed under the MIT software license, see the accompanying
    // file LICENSE or http://www.opensource.org/licenses/mit-license.php.
    function base (ALPHABET) {
      if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
      var BASE_MAP = new Uint8Array(256)
      for (var j = 0; j < BASE_MAP.length; j++) {
        BASE_MAP[j] = 255
      }
      for (var i = 0; i < ALPHABET.length; i++) {
        var x = ALPHABET.charAt(i)
        var xc = x.charCodeAt(0)
        if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
        BASE_MAP[xc] = i
      }
      var BASE = ALPHABET.length
      var LEADER = ALPHABET.charAt(0)
      var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
      var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
      function encode (source) {
        if (source instanceof Uint8Array) {
        } else if (ArrayBuffer.isView(source)) {
          source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
        } else if (Array.isArray(source)) {
          source = Uint8Array.from(source)
        }
        if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
        if (source.length === 0) { return '' }
            // Skip & count leading zeroes.
        var zeroes = 0
        var length = 0
        var pbegin = 0
        var pend = source.length
        while (pbegin !== pend && source[pbegin] === 0) {
          pbegin++
          zeroes++
        }
            // Allocate enough space in big-endian base58 representation.
        var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
        var b58 = new Uint8Array(size)
            // Process the bytes.
        while (pbegin !== pend) {
          var carry = source[pbegin]
                // Apply "b58 = b58 * 256 + ch".
          var i = 0
          for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
            carry += (256 * b58[it1]) >>> 0
            b58[it1] = (carry % BASE) >>> 0
            carry = (carry / BASE) >>> 0
          }
          if (carry !== 0) { throw new Error('Non-zero carry') }
          length = i
          pbegin++
        }
            // Skip leading zeroes in base58 result.
        var it2 = size - length
        while (it2 !== size && b58[it2] === 0) {
          it2++
        }
            // Translate the result into a string.
        var str = LEADER.repeat(zeroes)
        for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
        return str
      }
      function decodeUnsafe (source) {
        if (typeof source !== 'string') { throw new TypeError('Expected String') }
        if (source.length === 0) { return new Uint8Array() }
        var psz = 0
            // Skip and count leading '1's.
        var zeroes = 0
        var length = 0
        while (source[psz] === LEADER) {
          zeroes++
          psz++
        }
            // Allocate enough space in big-endian base256 representation.
        var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
        var b256 = new Uint8Array(size)
            // Process the characters.
        while (source[psz]) {
                // Decode character
          var carry = BASE_MAP[source.charCodeAt(psz)]
                // Invalid character
          if (carry === 255) { return }
          var i = 0
          for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
            carry += (BASE * b256[it3]) >>> 0
            b256[it3] = (carry % 256) >>> 0
            carry = (carry / 256) >>> 0
          }
          if (carry !== 0) { throw new Error('Non-zero carry') }
          length = i
          psz++
        }
            // Skip leading zeroes in b256.
        var it4 = size - length
        while (it4 !== size && b256[it4] === 0) {
          it4++
        }
        var vch = new Uint8Array(zeroes + (size - it4))
        var j = zeroes
        while (it4 !== size) {
          vch[j++] = b256[it4++]
        }
        return vch
      }
      function decode (string) {
        var buffer = decodeUnsafe(string)
        if (buffer) { return buffer }
        throw new Error('Non-base' + BASE + ' character')
      }
      return {
        encode: encode,
        decodeUnsafe: decodeUnsafe,
        decode: decode
      }
    }
    module.exports = base
    
    },{}],2:[function(require,module,exports){
    const basex = require('base-x')
    const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    
    module.exports = basex(ALPHABET)
    
    },{"base-x":1}]},{},[2])(2)
    });