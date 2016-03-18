"use strict";

const assert = require('assert');

describe('3.test.js (3 + 2 + 1 + 4 = 10)', function() {
    describe('first (3)', function() {
        it('1', function (done) {
            assert(true);
            done();
        });

        it('2', function (done) {
            assert(true);
            done();
        });

        it('3', function (done) {
            assert(true);
            done();
        });

    });

    describe('second (2)', function() {
        it('1', function (done) {
            assert(true);
            done();
        });
        it('2', function (done) {
            assert(true);
            done();
        });
    });

    describe('third (1)', function() {
        it.skip('skipped', function(done) {

        });

    });

    describe('fourth (4)', function() {
        it('1', function(done) {
            assert(true);
            done();
        });

        it('2', function(done) {
            assert(true);
            done();
        });

        it('3', function(done) {
            assert(true);
            done();
        });

        it('4', function(done) {
            assert(true);
            done();
        });
    });
});
