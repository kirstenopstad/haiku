# Haiku

#### By Kirsten Opstad & Daniel Yakovlev

#### A haiku checker

## Technologies Used

* HTML 
* CSS 
* Bootstrap
* Javascript
* webpack
* node.js
* Jest
* Babel
* ESLint

## Description

### Objectives (MVP)
An application that checks whether a poem is a haiku. 

* logic should verify that the poem has three lines.
* logic should verify English syllable rules (and exceptions) one at a time. 
  1. A syllable is formed by at least one vowel (a, e, i, o, u).
    * Exceptions:
      * a) Silent e is not counted as a vowel in a syllable.
        For example: tape, like, love, ex-treme, take, blue.

      * b) When two vowels carry one sound (diphthong), they cannot be divided.
        For example: coin, loud, bread, moon, sound, beau-ti-ful, a-void.

      * c) The letter “y” is not strictly a vowel but behaves like one.
           For example: man-y, bi-cy-cle, i-vy.
  2. Divide the syllable between two same consonants. (For example: rab-bit, let-ter, buf-fet, des-sert, ber-ry.)
  3. Vowel with long/short vowel sound...
     * The consonant goes with the second vowel if the first vowel has a long vowel sound.             
            * For example: ba-sic, ro-bot, wa-ter.
     * The consonant goes with the first vowel if it has a short vowel sound.    
           * For example: riv-er, mod-el, pan-el.
  4. Divide between two vowels that make two sounds. 
     * For example: di-et, di-aer-e-sis.
     * Exception:   
        * Two vowels make one sound.
        * For example: coat, boat, meet
  5. Use prefixes and suffixes to separate syllables.  
  6. Compound nouns are always divided between the two words.  
  7. Divide before the consonant before an "-le" syllable and sounds like “-el”.

If time, build out your application so that it can randomly generate haikus.
     <!-- snow mixes with rain— || NOUN VERBS PREPOSITION NOUN
      my mother keeps calling me || ___ NOUN ____ VERB NOUN
      by my brother's name ||  -->
<!-- 
This template includes placeholders for:

[x] Screenshots

![Screenshots](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.03bZmDGXaBhBYyxxp3Ls3gHaEA%26pid%3DApi&f=1&ipt=e980d57210242747a51c41421e1f09a6de3b1fdaeaadd297496787bb64e80c88&ipo=images)

[x] [Link to operational site](http://www.kirstenopstad.github.com/<REPOSITORY NAME>) -->

### Goals
1. Meet MVP
2. Add functionality to randomly generate haikus.
3. Add slick styling.

## Setup/Installation Requirements

* Clone this repo to your workspace.
* Navigate to the top level of the directory.
* In the root directory of the project, run:
```
$ npm install
```
* Then, to build and serve the project, run: 
```
$ npm run start
```
* To lint project, run:
```
$ npm run lint
```
To run tests with Jest, run:
```
$ npm run test
```

## Known Bugs

* Handle case of word that ends in -ed
* Handle case of word that ends in -es
* No known bugs. If you find one, please email me at kirsten.opstad@gmail.com with the subject **[_Repo Name_] Bug** and include:
  * BUG: _A brief description of the bug_
  * FIX: _Suggestion for solution (if you have one!)_
  * If you'd like to be credited, please also include your **_github user profile link_**

## License

MIT License

Copyright (c) 2022 Kirsten Opstad & Daniel Yakovlev


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.