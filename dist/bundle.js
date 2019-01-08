var myApp =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgrounds/random-bg */ \"./src/app/backgrounds/random-bg.js\");\n/* harmony import */ var _modal_dialogs_modals_enter_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-dialogs/modals/enter-name */ \"./src/app/modal-dialogs/modals/enter-name.js\");\n\n\n\nObject(_backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_0__[\"randomBackground\"])();\nObject(_modal_dialogs_modals_enter_name__WEBPACK_IMPORTED_MODULE_1__[\"createEnterNameModal\"])();\n\n\n//# sourceURL=webpack://myApp/./src/app/app.js?");

/***/ }),

/***/ "./src/app/backgrounds/random-bg.js":
/*!******************************************!*\
  !*** ./src/app/backgrounds/random-bg.js ***!
  \******************************************/
/*! exports provided: randomBackground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomBackground\", function() { return randomBackground; });\nfunction randomBackground() {\n  const body = document.querySelector('body');\n\n  const rand = Math.floor(1 + Math.random() * 4);\n  body.style.backgroundImage = `url(\"./img/bg${rand}.png\")`;\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/backgrounds/random-bg.js?");

/***/ }),

/***/ "./src/app/game/characters/enemy/enemy.js":
/*!************************************************!*\
  !*** ./src/app/game/characters/enemy/enemy.js ***!
  \************************************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\nclass Enemy {\n  constructor() {\n    this.health = 100;\n    this.name = generateName();\n    this.types = ['goblin', 'orc', 'ogre'];\n\n    this.armsType = this.types[Math.floor(Math.random() * (this.types.length))];\n    this.bodyType = this.types[Math.floor(Math.random() * (this.types.length))];\n    this.weaponType = this.types[Math.floor(Math.random() * (this.types.length))];\n    this.legsType = this.types[Math.floor(Math.random() * (this.types.length))];\n    this.faceType = this.types[Math.floor(Math.random() * (this.types.length))];\n  }\n\n  displayEnemy() {\n    this.createBody();\n    displayName(this.name);\n    displayHealth();\n  }\n\n  createBody() {\n    const enemy = document.createElement('div');\n    enemy.id = 'idle-enemy';\n\n    enemy.innerHTML = `<img src=\"./game/characters/enemy/bodyparts/right-arms/${this.armsType}.png\" height=\"74px\" class=\"right-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/body/${this.bodyType}.png\" height=\"264px\" class=\"body\">\n        <img src=\"./game/characters/enemy/bodyparts/left-arms/${this.armsType}.png\" height=\"74px\" class=\"left-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/left-leg/${this.legsType}.png\" height=\"51px\" class=\"left-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/right-leg/${this.legsType}.png\" height=\"51px\" class=\"right-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/face/${this.faceType}1.png\" height=\"96px\" class=\"face\">`;\n\n    document.body.appendChild(enemy);\n  }\n\n  createAttackBody() {\n    const enemy = document.createElement('div');\n    enemy.id = 'hit-enemy';\n    document.body.appendChild(enemy);\n\n    enemy.innerHTML = `<img src=\"./game/characters/enemy/bodyparts/right-arms/${this.armsType}.png\" height=\"74px\" class=\"hit-right-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/body/${this.bodyType}.png\" height=\"264px\" class=\"hit-body\">\n        <img src=\"./game/characters/enemy/bodyparts/left-arms/${this.armsType}.png\" height=\"74px\" class=\"hit-left-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/left-leg/${this.legsType}.png\" height=\"51px\" class=\"hit-left-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/right-leg/${this.legsType}.png\" height=\"51px\" class=\"hit-right-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/weapon/${this.weaponType}.png\" height=\"51px\" class=\"hit-weapon\">\n        <img src=\"./game/characters/enemy/bodyparts/face/${this.faceType}1.png\" height=\"96px\" class=\"hit-face\">`;\n\n    document.body.appendChild(enemy);\n  }\n\n  createDieBody() {\n    const enemy = document.createElement('div');\n    enemy.id = 'die-enemy';\n\n    enemy.innerHTML = `<img src=\"./game/characters/enemy/bodyparts/right-arms/${this.armsType}.png\" height=\"74px\" class=\"die-right-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/body/${this.bodyType}.png\" height=\"264px\" class=\"die-body\">\n        <img src=\"./game/characters/enemy/bodyparts/left-arms/${this.armsType}.png\" height=\"74px\" class=\"die-left-arm\">\n        <img src=\"./game/characters/enemy/bodyparts/left-leg/${this.legsType}.png\" height=\"51px\" class=\"die-left-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/right-leg/${this.legsType}.png\" height=\"51px\" class=\"die-right-leg\">\n        <img src=\"./game/characters/enemy/bodyparts/face/${this.faceType}2.png\" height=\"96px\" class=\"die-face\">`;\n\n    document.body.appendChild(enemy);\n  }\n\n  decreaseHealth() {\n    this.health -= 20 + Math.random() * (25 - 20);\n    if (this.health < 5) this.health = 0;\n    document.querySelector('#enemy-health').style.width = this.health + '%';\n    if (this.health === 0) {\n      this.die();\n      return false;\n    }\n    return true;\n  }\n\n  die() {\n    setTimeout(() => {\n      const sound = new Audio('./game/characters/enemy/sounds/died.mp3');\n      sound.play()\n        .catch();\n\n      document.getElementById('idle-enemy').remove();\n      this.createDieBody();\n    }, 1000);\n  }\n\n  attack(player) {\n    const sound = new Audio('./game/characters/enemy/sounds/kick.mp3');\n    sound.play()\n      .catch();\n\n    document.getElementById('idle-enemy').remove();\n    this.createAttackBody();\n\n    setTimeout(() => {\n      document.getElementById('hit-enemy').remove();\n      this.createBody();\n      if (player.decreaseHealth()) {\n        player.attack(this);\n      }\n    }, 1500);\n  }\n}\n\nfunction generateName() {\n  const adjectives = ['Blunt', 'Abominable', 'Hysterical', 'Insidious', 'Angry', 'Dreadful', 'Lousy', 'Filthy'];\n  const kind = ['Ogre', 'Orc', 'Goblin'];\n  const name = ['Anthony', 'Benjamin', 'Rachel', 'Tyler', 'Sara', 'Rodrigo', 'Jack', 'Zoe', 'Ricardo'];\n\n\n  let fullName = '';\n  fullName += adjectives[Math.floor(Math.random() * (adjectives.length))];\n  fullName += ' ';\n  fullName += kind[Math.floor(Math.random() * (kind.length))];\n  fullName += ' ';\n  fullName += name[Math.floor(Math.random() * (name.length))];\n\n  return fullName;\n}\n\nfunction displayName(name) {\n  const block = document.querySelector('#top-block');\n  const nameDisplay = document.createElement('h2');\n  nameDisplay.className = 'enemy name';\n\n  nameDisplay.innerText = name;\n\n  block.appendChild(nameDisplay);\n}\n\nfunction displayHealth() {\n  const block = document.querySelector('#top-block');\n  const health = document.createElement('div');\n  health.className = 'progress enemy';\n\n  health.innerHTML = '<div id=\"enemy-health\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\"' +\n    ' role=\"progressbar\" style=\"width: 100%\"></div>';\n\n  block.appendChild(health);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/game/characters/enemy/enemy.js?");

/***/ }),

/***/ "./src/app/game/characters/player/player.js":
/*!**************************************************!*\
  !*** ./src/app/game/characters/player/player.js ***!
  \**************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var _modal_dialogs_modals_choose_spell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialogs/modals/choose-spell */ \"./src/app/modal-dialogs/modals/choose-spell.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/app/game/characters/player/tasks.js\");\n/* harmony import */ var _modal_dialogs_modals_game_over__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modal-dialogs/modals/game-over */ \"./src/app/modal-dialogs/modals/game-over.js\");\n/* harmony import */ var _modal_dialogs_modals_next_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modal-dialogs/modals/next-round */ \"./src/app/modal-dialogs/modals/next-round.js\");\n/* harmony import */ var _enemy_enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enemy/enemy */ \"./src/app/game/characters/enemy/enemy.js\");\n/* harmony import */ var _backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../backgrounds/random-bg */ \"./src/app/backgrounds/random-bg.js\");\n/* harmony import */ var _modal_dialogs_modals_false__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modal-dialogs/modals/false */ \"./src/app/modal-dialogs/modals/false.js\");\n/* harmony import */ var _modal_dialogs_modals_true__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modal-dialogs/modals/true */ \"./src/app/modal-dialogs/modals/true.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nclass Player {\n  constructor(name) {\n    this.health = 100;\n    this.name = name;\n    this.score = 0;\n    this.tasks = _tasks__WEBPACK_IMPORTED_MODULE_1__[\"tasks\"];\n  }\n\n  displayPlayer() {\n    const player = document.createElement('div');\n    player.id = 'player';\n    document.body.appendChild(player);\n\n    spriteAnimation(player.id, './game/characters/player/sprites/idle.png');\n\n    displayPlayerName(this.name);\n    displayPlayerHealth();\n  }\n\n  attack(enemy) {\n    Object(_modal_dialogs_modals_choose_spell__WEBPACK_IMPORTED_MODULE_0__[\"createChooseSpellModal\"])();\n\n    document.querySelector('#spell-1').addEventListener('click', () => {\n      this.createTask(enemy, 1);\n    });\n\n    document.querySelector('#spell-2').addEventListener('click', () => {\n      this.createTask(enemy, 2);\n    });\n\n    document.querySelector('#spell-3').addEventListener('click', () => {\n      this.createTask(enemy, 3);\n    });\n  }\n\n  createTask(enemy, spell) {\n    this.tasks[Math.floor(Math.random() * (this.tasks.length))]();\n\n    makeInputFocusable();\n\n    const answerButton = document.querySelector('.modal-footer .btn');\n    answerButton.addEventListener('click', () => {\n      const answerState = answerButton.getAttribute('value');\n      document.querySelector('.modal-wrap').remove();\n\n      if (answerState === 'true') {\n        Object(_modal_dialogs_modals_true__WEBPACK_IMPORTED_MODULE_7__[\"createTrueModal\"])();\n        if (spell === 1) {\n          this.spell1();\n        } else if (spell === 2) {\n          this.spell2();\n        } else if (spell === 3) {\n          this.spell3();\n        }\n        this.innerAttack(enemy);\n      } else {\n        Object(_modal_dialogs_modals_false__WEBPACK_IMPORTED_MODULE_6__[\"createFalseModal\"])();\n        enemy.attack(this);\n      }\n    });\n  }\n\n  innerAttack(enemy) {\n    if (enemy.decreaseHealth()) {\n      const fight = enemy.attack.bind(enemy, this);\n      setTimeout(() => fight(), 2500);\n    } else {\n      const newRound = this.newRound.bind(this);\n      setTimeout(newRound, 2000);\n    }\n  }\n\n  newRound() {\n    Object(_modal_dialogs_modals_next_round__WEBPACK_IMPORTED_MODULE_3__[\"createNextRoundModal\"])();\n    ++this.score;\n    document.querySelector('.modal-footer .btn').addEventListener('click', () => {\n      this.increaseHealth();\n\n      clearScreenForNewRound();\n\n      const enemy = new _enemy_enemy__WEBPACK_IMPORTED_MODULE_4__[\"Enemy\"]();\n      enemy.displayEnemy();\n\n      setTimeout(() => this.attack(enemy), 1000);\n\n      document.getElementById('round-number-block').innerHTML = this.score + 1;\n\n      Object(_backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_5__[\"randomBackground\"])();\n    });\n  }\n\n  spell1() {\n    const sound = new Audio('./game/characters/player/sounds/spell1.mp3');\n    sound.play()\n      .catch();\n\n    const img = document.createElement('img');\n    img.src = './game/characters/player/img-spells/magic-star.png';\n    img.onload = () => {\n      document.querySelector('#player').appendChild(img);\n    };\n\n    setTimeout(() => img.remove(), 3000)\n  }\n\n  spell2() {\n    const sound = new Audio('./game/characters/player/sounds/spell2.mp3');\n    sound.play()\n      .catch();\n\n    const img = document.createElement('img');\n    img.src = './game/characters/player/sprites/jump.png';\n    img.onload = () => {\n      document.getElementById('player').style.background = \"url('./game/characters/player/sprites/jump.png')\";\n    };\n\n    setTimeout(() => {\n      document.getElementById('player').style.background = \"url('./game/characters/player/sprites/idle.png')\";\n    }, 2000);\n  }\n\n  spell3() {\n    const sound = new Audio('./game/characters/player/sounds/spell3.mp3');\n    sound.play()\n      .catch();\n\n    const img = document.createElement('img');\n    img.src = './game/characters/player/img-spells/magic-star2.png';\n    img.onload = () => {\n      document.querySelector('#player').appendChild(img);\n    };\n\n    setTimeout(() => img.remove(), 3000)\n  }\n\n  increaseHealth() {\n    this.health += 30 + Math.random() * (45 - 30);\n    document.querySelector('#player-health').style.width = this.health + '%';\n  }\n\n  decreaseHealth() {\n    this.health -= 8 + Math.random() * (15 - 8);\n    if (this.health < 5) this.health = 0;\n    document.querySelector('#player-health').style.width = this.health + '%';\n    if (this.health === 0) {\n      this.die();\n      return false;\n    }\n    return true;\n  }\n\n  die() {\n    const img = document.createElement('img');\n\n    img.onload = function () {\n      document.getElementById('player').remove();\n\n      const sound = new Audio('./game/characters/player/sounds/died.mp3');\n      sound.play()\n        .catch();\n\n      const player = document.createElement('div');\n      player.id = 'player-dying';\n      document.body.appendChild(player);\n\n      const element = document.getElementById('player-dying');\n      element.style.background = \"url('./game/characters/player/sprites/dead.png') 0px\";\n      let offset = 30 * 480;\n      let i = 30;\n\n      setInterval(function() {\n        if (offset > 480) {\n          i--;\n        }\n        offset = 480 * i;\n        element.style.backgroundPosition = offset + \"px\";\n      }, 1000/20);\n    };\n\n    img.src = './game/characters/player/sprites/dead.png';\n\n    this.gameOver();\n  }\n\n  gameOver() {\n    const users = JSON.parse(localStorage.getItem('users'));\n    users.forEach((item) => {\n      if (item.name === this.name) {\n        if (item.score < this.score) {\n          item.score = this.score;\n        }\n      }\n    });\n    localStorage.setItem('users', JSON.stringify(users));\n    Object(_modal_dialogs_modals_game_over__WEBPACK_IMPORTED_MODULE_2__[\"createGameOverModal\"])(this.score, this.name);\n  }\n}\n\nfunction displayPlayerName(name) {\n  const block = document.querySelector('#top-block');\n  const nameDisplayed = document.createElement('h2');\n  nameDisplayed.className = 'name player';\n\n  nameDisplayed.innerText = name;\n\n  block.appendChild(nameDisplayed);\n}\n\nfunction displayPlayerHealth() {\n  const block = document.querySelector('#top-block');\n  const health = document.createElement('div');\n  health.className = 'progress player';\n\n  health.innerHTML = '<div id=\"player-health\" class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\"' +\n    ' role=\"progressbar\" style=\"width: 100%\"></div>';\n\n  block.appendChild(health);\n}\n\nfunction spriteAnimation(elementId, imgName) {\n  const img = document.createElement('img');\n  let offset = 0;\n  img.onload = function () {\n    const element = document.getElementById(elementId);\n    element.style.background = \"url('\" + imgName + \"') \" + offset + \"px\";\n    let i = 0;\n    let state = true;\n\n    setInterval(function() {\n      if (state && offset < img.width) {\n        i++;\n      } else if (state) {\n        state = false;\n      } else if (!state && offset > 0) {\n        i--;\n      } else {\n        state = true;\n      }\n\n      offset = 332.8 * i;\n      element.style.backgroundPosition = offset + \"px\";\n    }, 1000/20);\n  };\n\n  img.src = imgName;\n}\n\n\nfunction makeInputFocusable() {\n  const input = document.querySelector('input');\n  if (input) {\n    input.focus();\n  }\n}\n\n\nfunction clearScreenForNewRound() {\n  document.getElementById('die-enemy').remove();\n  document.querySelector('.enemy.name').remove();\n  document.querySelector('.enemy.progress').remove();\n  document.querySelector('.modal-wrap').remove();\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/game/characters/player/player.js?");

/***/ }),

/***/ "./src/app/game/characters/player/tasks.js":
/*!*************************************************!*\
  !*** ./src/app/game/characters/player/tasks.js ***!
  \*************************************************/
/*! exports provided: tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\n/* harmony import */ var _modal_dialogs_modals_tasks_simple_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/simple-math */ \"./src/app/modal-dialogs/modals/tasks/simple-math.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_translate_to_russian_translate_to_russian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/translate-to-russian/translate-to-russian */ \"./src/app/modal-dialogs/modals/tasks/translate-to-russian/translate-to-russian.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_animals_animals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/animals/animals */ \"./src/app/modal-dialogs/modals/tasks/animals/animals.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_capitals_capitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/capitals/capitals */ \"./src/app/modal-dialogs/modals/tasks/capitals/capitals.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_audio_en_audio_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/audio-en/audio-en */ \"./src/app/modal-dialogs/modals/tasks/audio-en/audio-en.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_flags_flags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/flags/flags */ \"./src/app/modal-dialogs/modals/tasks/flags/flags.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_compare_numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/compare-numbers */ \"./src/app/modal-dialogs/modals/tasks/compare-numbers.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_find_square_find_square__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/find-square/find-square */ \"./src/app/modal-dialogs/modals/tasks/find-square/find-square.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_math_problems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/math-problems */ \"./src/app/modal-dialogs/modals/tasks/math-problems.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_gerund_gerund__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/gerund/gerund */ \"./src/app/modal-dialogs/modals/tasks/gerund/gerund.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_third_person_singular_third_person__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/third-person-singular/third-person */ \"./src/app/modal-dialogs/modals/tasks/third-person-singular/third-person.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_sequences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/sequences */ \"./src/app/modal-dialogs/modals/tasks/sequences.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_audio_animals_audio_animals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/audio-animals/audio-animals */ \"./src/app/modal-dialogs/modals/tasks/audio-animals/audio-animals.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_pictures_pictures__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/pictures/pictures */ \"./src/app/modal-dialogs/modals/tasks/pictures/pictures.js\");\n/* harmony import */ var _modal_dialogs_modals_tasks_extras__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../modal-dialogs/modals/tasks/extras */ \"./src/app/modal-dialogs/modals/tasks/extras.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst tasks = [_modal_dialogs_modals_tasks_extras__WEBPACK_IMPORTED_MODULE_14__[\"createExtrasModal\"], _modal_dialogs_modals_tasks_pictures_pictures__WEBPACK_IMPORTED_MODULE_13__[\"createPictureModal\"], _modal_dialogs_modals_tasks_audio_animals_audio_animals__WEBPACK_IMPORTED_MODULE_12__[\"createAudioAnimalTaskModal\"],\n   _modal_dialogs_modals_tasks_sequences__WEBPACK_IMPORTED_MODULE_11__[\"createSequencesModal\"], _modal_dialogs_modals_tasks_third_person_singular_third_person__WEBPACK_IMPORTED_MODULE_10__[\"createThirdPersonSingularModal\"], _modal_dialogs_modals_tasks_gerund_gerund__WEBPACK_IMPORTED_MODULE_9__[\"createGerundModal\"],\n   _modal_dialogs_modals_tasks_math_problems__WEBPACK_IMPORTED_MODULE_8__[\"createMathProblemModal\"], _modal_dialogs_modals_tasks_find_square_find_square__WEBPACK_IMPORTED_MODULE_7__[\"createFindSquareModal\"], _modal_dialogs_modals_tasks_compare_numbers__WEBPACK_IMPORTED_MODULE_6__[\"createCompareNumbersModal\"],\n   _modal_dialogs_modals_tasks_audio_en_audio_en__WEBPACK_IMPORTED_MODULE_4__[\"createAudioTaskModal\"], _modal_dialogs_modals_tasks_flags_flags__WEBPACK_IMPORTED_MODULE_5__[\"createFlagsModal\"], _modal_dialogs_modals_tasks_simple_math__WEBPACK_IMPORTED_MODULE_0__[\"createSimpleMathModal\"],\n   _modal_dialogs_modals_tasks_translate_to_russian_translate_to_russian__WEBPACK_IMPORTED_MODULE_1__[\"createTranslateToRussianModal\"], _modal_dialogs_modals_tasks_animals_animals__WEBPACK_IMPORTED_MODULE_2__[\"createAnimalsModal\"], _modal_dialogs_modals_tasks_capitals_capitals__WEBPACK_IMPORTED_MODULE_3__[\"createCapitalsModal\"]];\n\n\n//# sourceURL=webpack://myApp/./src/app/game/characters/player/tasks.js?");

/***/ }),

/***/ "./src/app/game/game.js":
/*!******************************!*\
  !*** ./src/app/game/game.js ***!
  \******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _characters_player_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/player/player */ \"./src/app/game/characters/player/player.js\");\n/* harmony import */ var _characters_enemy_enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characters/enemy/enemy */ \"./src/app/game/characters/enemy/enemy.js\");\n\n\n\nclass Game {\n  constructor(name) {\n    this.name = name;\n  }\n\n  startGame() {\n    addTopBlock();\n\n    if (!document.querySelector('audio')) {\n      const audio = new Audio('StealthGroover.mp3');\n      audio.setAttribute('loop', 'loop');\n      audio.play()\n        .catch();\n\n      document.body.appendChild(audio);\n    }\n\n\n    if (!localStorage.getItem('users')) {\n      localStorage.setItem('users', JSON.stringify([]));\n    }\n    const users = JSON.parse(localStorage.getItem('users'));\n\n    if (users.every(item => item.name != this.name)) {\n      users[users.length] = {\n        name: this.name,\n        score: 0\n      };\n    }\n\n    localStorage.setItem('users', JSON.stringify(users));\n\n    const PLAYER = new _characters_player_player__WEBPACK_IMPORTED_MODULE_0__[\"Player\"](this.name);\n    PLAYER.displayPlayer();\n\n    let enemy = new _characters_enemy_enemy__WEBPACK_IMPORTED_MODULE_1__[\"Enemy\"]();\n    enemy.displayEnemy();\n\n    setTimeout(() => PLAYER.attack(enemy), 1000);\n  }\n}\n\n\nfunction addTopBlock() {\n  const block = document.createElement('div');\n  block.id = 'top-block';\n  block.className = 'card';\n  block.style.width = '70%';\n  block.style.height = '20vh';\n  block.style.margin = '0 auto';\n  block.style.backgroundColor = 'rgba(250, 250, 250, 0.7)';\n\n  document.body.appendChild(block);\n\n  const round = document.createElement('div');\n  round.id = 'round-number-block';\n  round.innerHTML = '1';\n  round.style.margin = '20px auto';\n\n  block.appendChild(round);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/game/game.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modal-dialog.js":
/*!***********************************************!*\
  !*** ./src/app/modal-dialogs/modal-dialog.js ***!
  \***********************************************/
/*! exports provided: createModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createModal\", function() { return createModal; });\nfunction createModal() {\n  const modal = document.createElement('div');\n  modal.className = 'modal-wrap';\n  modal.innerHTML = '<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\\n' +\n    '         aria-hidden=\"true\" style=\"display: block\">\\n' +\n        '<div class=\"vertical-alignment-helper\">' +\n    '        <div class=\"modal-dialog vertical-align-center\">\\n' +\n    '            <div class=\"modal-content\">\\n' +\n    '                <div class=\"modal-header\">\\n' +\n    '                </div>\\n' +\n    '                <div class=\"modal-body\">\\n' +\n    '                </div>\\n' +\n    '                <div class=\"modal-footer\">\\n' +\n    '                </div>\\n' +\n    '            </div>\\n' +\n    '        </div>\\n' +\n    '     </div>' +\n    '  </div>';\n\n    document.body.appendChild(modal);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modal-dialog.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/choose-spell.js":
/*!******************************************************!*\
  !*** ./src/app/modal-dialogs/modals/choose-spell.js ***!
  \******************************************************/
/*! exports provided: createChooseSpellModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createChooseSpellModal\", function() { return createChooseSpellModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createChooseSpellModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n  const spellButton1 = document.createElement('button'),\n    spellButton2 = document.createElement('button'),\n    spellButton3 = document.createElement('button');\n\n  function listener(e) {\n    if (e.key === '1') {\n      spellButton1.click();\n    } else if (e.key === '2') {\n      spellButton2.click();\n    } else if (e.key === '3') {\n      spellButton3.click();\n    }\n  }\n\n  addText(document.createElement('h5'), header, 'Choose the spell to attack!');\n  addButton(spellButton1, body, 'Abiens Abi', 'spell-1', listener);\n  addButton(spellButton2, body, 'Actus Purus', 'spell-2', listener);\n  addButton(spellButton3, body, 'Ad Gloriam', 'spell-3', listener);\n  footer.innerText = 'you can just push 1, 2 or 3 keys';\n\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addButton(button, parent, str, id, listener) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.id = id;\n  button.innerText = str;\n  parent.appendChild(button);\n\n  button.addEventListener('click', () => {\n    window.removeEventListener('keyup', listener);\n    document.querySelector('.modal-wrap').remove();\n  });\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/choose-spell.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/enter-name.js":
/*!****************************************************!*\
  !*** ./src/app/modal-dialogs/modals/enter-name.js ***!
  \****************************************************/
/*! exports provided: createEnterNameModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEnterNameModal\", function() { return createEnterNameModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/game */ \"./src/app/game/game.js\");\n\n\n\nfunction createEnterNameModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  addText(document.createElement('h5'), header, 'Hello!')\n\n  body.innerHTML = '<p>Enter your name, please (3-12 characters):</p>';\n\n  const input = document.createElement('input');\n  addInput(input, body, 'Your name');\n\n  const saveButton = document.createElement('button');\n  addButton(saveButton, footer, 'SAVE');\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 2 && input.value.length < 13) {\n      saveButton.removeAttribute('disabled');\n    } else {\n      saveButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  saveButton.addEventListener('click', () => {\n    document.querySelector('.modal-wrap').remove();\n    window.removeEventListener('keyup', listener);\n\n    const GAME = new _game_game__WEBPACK_IMPORTED_MODULE_1__[\"Game\"](input.value);\n    GAME.startGame();\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') saveButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  input.setAttribute('autofocus', 'autofocus');\n  parent.appendChild(input);\n}\n\nfunction addButton(button, parent, str) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = str;\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/enter-name.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/false.js":
/*!***********************************************!*\
  !*** ./src/app/modal-dialogs/modals/false.js ***!
  \***********************************************/
/*! exports provided: createFalseModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFalseModal\", function() { return createFalseModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createFalseModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  header.remove();\n  footer.remove();\n  addText(document.createElement('h3'), body, 'FALSE!');\n\n  document.querySelector('.modal-content').classList.add('text-white');\n  document.querySelector('.modal-content').classList.add('bg-danger');\n\n  setTimeout(() => document.querySelector('.modal-wrap').remove(), 1300);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/false.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/game-over.js":
/*!***************************************************!*\
  !*** ./src/app/modal-dialogs/modals/game-over.js ***!
  \***************************************************/
/*! exports provided: createGameOverModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGameOverModal\", function() { return createGameOverModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../game/game */ \"./src/app/game/game.js\");\n/* harmony import */ var _backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../backgrounds/random-bg */ \"./src/app/backgrounds/random-bg.js\");\n\n\n\n\nfunction createGameOverModal(score, name) {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  addText(document.createElement('h5'), header, 'OH NO! You died :( \\nScore: ' + score)\n  createTable(body, name, score);\n  addButton(document.createElement('button'), footer,'RESTART', name);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addButton(button, parent, str, name) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = str;\n  parent.appendChild(button);\n\n  function listener(e) {\n    if (e.key === 'Enter') button.click();\n  }\n  window.addEventListener('keydown', listener);\n\n  button.addEventListener('click', () => {\n    document.querySelector('.modal-wrap').remove();\n    window.removeEventListener('keydown', listener);\n\n    document.getElementById('idle-enemy').remove();\n    document.getElementById('player-dying').remove();\n    document.getElementById('top-block').remove();\n\n    const GAME = new _game_game__WEBPACK_IMPORTED_MODULE_1__[\"Game\"](name);\n    GAME.startGame();\n    Object(_backgrounds_random_bg__WEBPACK_IMPORTED_MODULE_2__[\"randomBackground\"])();\n  });\n}\n\nfunction createTable(parent, name, score) {\n  const table = document.createElement('table');\n  table.classList.add('table');\n\n  table.innerHTML = '  <thead class=\"thead-dark\">\\n' +\n    '    <tr>\\n' +\n    '      <th scope=\"col\">#</th>\\n' +\n    '      <th scope=\"col\">Name</th>\\n' +\n    '      <th scope=\"col\">Score</th>\\n' +\n    '    </tr>\\n' +\n    '  </thead>\\n' +\n    '  <tbody>\\n' +\n    '  </tbody>';\n\n  parent.appendChild(table);\n  fillTable(name, score);\n}\n\nfunction fillTable(name, score) {\n  const users = JSON.parse(localStorage.getItem('users'));\n  users.sort((a, b) => b.score - a.score);\n\n  let place = 0;\n  users.forEach((item, i) => {\n    if (item.name === name) place = i + 1;\n  });\n\n  if (place > 5) {\n    for (let i = 0; i < 3; i++) {\n      const user = users[i];\n      fillRow(i + 1, user.name, user.score, document.createElement('tr'));\n    }\n\n    addEmptyRow();\n    addPlayerRow(name, score, place);\n    if (users.length > place) addEmptyRow();\n  } else {\n    for (let i = 0; i < 5; i++) {\n      const user = users[i],\n        tr = document.createElement('tr');\n\n      if (user.name === name) tr.className = 'table-success';\n\n      fillRow(i + 1, user.name, user.score, tr);\n    }\n    if (users.length > 5) addEmptyRow();\n  }\n}\n\nfunction addEmptyRow() {\n  const trEmpty = document.createElement('tr');\n  trEmpty.innerHTML = `      <th scope=\"row\">...</th>\n      <td>...</td>\n      <td>...</td>`;\n  document.querySelector('tbody').appendChild(trEmpty);\n}\n\nfunction addPlayerRow(name, score, place) {\n  const tr = document.createElement('tr');\n  tr.className = 'table-success';\n  tr.innerHTML = `<th scope=\"row\">${place}</th>\n      <td>${name}</td>\n      <td>${score}</td>`;\n  document.querySelector('tbody').appendChild(tr);\n}\n\nfunction fillRow(place, name, score, row) {\n  row.innerHTML = `<th scope=\"row\">${place}</th>\n      <td>${name}</td>\n      <td>${score}</td>`;\n  document.querySelector('tbody').appendChild(row);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/game-over.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/next-round.js":
/*!****************************************************!*\
  !*** ./src/app/modal-dialogs/modals/next-round.js ***!
  \****************************************************/
/*! exports provided: createNextRoundModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNextRoundModal\", function() { return createNextRoundModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createNextRoundModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  addText(document.createElement('h5'), header, 'Wow, you\\'re really cool!');\n  addText(document.createElement('p'), body, 'This monster will not bother anyone anymore. Can you kill another one?')\n  addButton(document.createElement('button'), footer, 'NEXT ROUND');\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addButton(button, parent, str) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = str;\n  parent.appendChild(button);\n\n  function listener(e) {\n    if (e.key === 'Enter') {\n      button.click();\n    }\n  }\n  window.addEventListener('keydown', listener);\n\n  button.addEventListener('click', () => {\n    window.removeEventListener('keydown', listener);\n  });\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/next-round.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/animals/animals.js":
/*!***************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/animals/animals.js ***!
  \***************************************************************/
/*! exports provided: createAnimalsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAnimalsModal\", function() { return createAnimalsModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/app/modal-dialogs/modals/tasks/animals/list.js\");\n\n\n\nfunction createAnimalsModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    answerButton = document.createElement('button');\n\n  const link = Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"])[Math.floor(Math.random() * Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"]).length)];\n  const input = document.createElement('input');\n  body.innerHTML = `<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 400px;\"><img height=\"300px\" src=\"${link}\"></div>`;\n\n  addText(document.createElement('h5'), header, 'WHO IS IT? (en)');\n  addLinkToAuthor(body);\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _list__WEBPACK_IMPORTED_MODULE_1__[\"list\"][link].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addLinkToAuthor(body) {\n  const author = document.createElement('div');\n  author.style.margin = '10px';\n  author.innerHTML = '<a class=\"badge badge-light\" target=\"_blank\" ' +\n    'href=\\'https://www.freepik.com/free-vector/cute-woodland-animals_1585897.htm\\'>Designed by Lesyaskripak</a>';\n  body.appendChild(author);\n}\n\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/animals/animals.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/animals/list.js":
/*!************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/animals/list.js ***!
  \************************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = {\n  './modal-dialogs/modals/tasks/animals/img/fox.png': ['fox'],\n  './modal-dialogs/modals/tasks/animals/img/jellyfish.png': ['jellyfish'],\n  './modal-dialogs/modals/tasks/animals/img/koala.png': ['koala'],\n  './modal-dialogs/modals/tasks/animals/img/owl.png': ['owl'],\n  './modal-dialogs/modals/tasks/animals/img/unicorn.png': ['unicorn']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/animals/list.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/audio-animals/audio-animals.js":
/*!***************************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/audio-animals/audio-animals.js ***!
  \***************************************************************************/
/*! exports provided: createAudioAnimalTaskModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAudioAnimalTaskModal\", function() { return createAudioAnimalTaskModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/app/modal-dialogs/modals/tasks/audio-animals/list.js\");\n\n\n\nfunction createAudioAnimalTaskModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    link = Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"])[Math.floor(Math.random() * Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"]).length)],\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  footer.style.flexDirection = 'column';\n\n  addText(document.createElement('h5'), header, 'WHAT ANIMAL IS IT? (en/ru)');\n\n  body.innerHTML = '<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 100px;\">' +\n    `<audio id=\"task-audio\" controls src=\"${link}\"></audio></div>`;\n  addInput(input, body, 'ANSWER');\n  footer.innerText = 'you can push SHIFT key to hear the audio';\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _list__WEBPACK_IMPORTED_MODULE_1__[\"list\"][link].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n    if (e.key === 'Shift') document.getElementById('task-audio').play().catch();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.prepend(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/audio-animals/audio-animals.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/audio-animals/list.js":
/*!******************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/audio-animals/list.js ***!
  \******************************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = {\n  './modal-dialogs/modals/tasks/audio-animals/sounds/cat.mp3': ['cat', 'kitten', 'кот', 'кошка', 'котик',\n    'кошечка', 'котёнок', 'котенок'],\n  './modal-dialogs/modals/tasks/audio-animals/sounds/cock.mp3': ['cock', 'chicken', 'петух', 'петушок', 'петушочек']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/audio-animals/list.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/audio-en/audio-en.js":
/*!*****************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/audio-en/audio-en.js ***!
  \*****************************************************************/
/*! exports provided: createAudioTaskModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createAudioTaskModal\", function() { return createAudioTaskModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/app/modal-dialogs/modals/tasks/audio-en/list.js\");\n\n\n\nfunction createAudioTaskModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    enterNameHeader = document.createElement('h5'),\n    link = Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"])[Math.floor(Math.random() * Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"]).length)],\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  footer.style.flexDirection = 'column';\n\n  addText(enterNameHeader, header, 'WRITE WHAT YOU HEAR (en)');\n  body.innerHTML = '<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 100px;\">' +\n    `<audio id=\"task-audio\" controls src=\"${link}\"></audio></div>`;\n  addInput(input, body, 'ANSWER');\n  footer.innerText = 'you can push SHIFT key to hear the audio';\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _list__WEBPACK_IMPORTED_MODULE_1__[\"list\"][link].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n    if (e.key === 'Shift') document.getElementById('task-audio').play().catch();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.prepend(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/audio-en/audio-en.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/audio-en/list.js":
/*!*************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/audio-en/list.js ***!
  \*************************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = {\n  './modal-dialogs/modals/tasks/audio-en/sounds/bicycle.mp3': ['bicycle'],\n  './modal-dialogs/modals/tasks/audio-en/sounds/computer.mp3': ['computer'],\n  './modal-dialogs/modals/tasks/audio-en/sounds/orange.mp3': ['orange'],\n  './modal-dialogs/modals/tasks/audio-en/sounds/sister.mp3': ['sister']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/audio-en/list.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/capitals/capitals.js":
/*!*****************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/capitals/capitals.js ***!
  \*****************************************************************/
/*! exports provided: createCapitalsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCapitalsModal\", function() { return createCapitalsModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ \"./src/app/modal-dialogs/modals/tasks/capitals/dictionary.js\");\n\n\n\nfunction createCapitalsModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    country = Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"])[Math.floor(Math.random() * Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"]).length)],\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  addText(document.createElement('h5'), header, 'WHAT IS THE CAPITAL OF THIS COUNTRY? (en/ru)');\n  body.innerHTML = `<p>${country}</p>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"][country].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/capitals/capitals.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/capitals/dictionary.js":
/*!*******************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/capitals/dictionary.js ***!
  \*******************************************************************/
/*! exports provided: dict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dict\", function() { return dict; });\nconst dict = {\n  'Belarus': ['minsk', 'минск'],\n  'Ukraine': ['kiev', 'киев'],\n  'Russia': ['moscow', 'москва'],\n  'Germany': ['berlin', 'берлин'],\n  'Poland': ['warsaw', 'варшава'],\n  'France': ['paris', 'париж'],\n  'Belgium': ['brussels', 'брюссель']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/capitals/dictionary.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/compare-numbers.js":
/*!***************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/compare-numbers.js ***!
  \***************************************************************/
/*! exports provided: createCompareNumbersModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createCompareNumbersModal\", function() { return createCompareNumbersModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createCompareNumbersModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    answerButton = document.createElement('button'),\n    firstNumber = Math.floor(Math.random() * 60) - 30,\n    secondNumber = Math.floor(Math.random() * 60) - 30;\n\n  addText(document.createElement('h5'), header, 'COMPARE THESE NUMBERS (>, <, =)');\n  body.innerHTML = `<p>${firstNumber}\n<input maxlength=\"1\" type=\"text\" style=\"display: inline; width: 40px; margin: 10px;\" class=\"form-control\" placeholder=\"?\">\n${secondNumber}</p>`;\n  addAnswerButton(answerButton, footer);\n\n  const input = document.querySelector('input');\n  input.addEventListener('input', () => {\n    if (input.value.length === 1) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    let answer;\n    if (firstNumber < secondNumber) {\n      answer = '<';\n    } else if (firstNumber > secondNumber) {\n      answer = '>';\n    } else {\n      answer = '=';\n    }\n    if (input.value === answer) {\n      answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/compare-numbers.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/extras.js":
/*!******************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/extras.js ***!
  \******************************************************/
/*! exports provided: createExtrasModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createExtrasModal\", function() { return createExtrasModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createExtrasModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    answerButton = document.createElement('button');\n\n  const lists = [\n    [\n      { word: 'yellow', answer: false },\n      { word: 'green', answer: false },\n      { word: 'tree', answer: true },\n      { word: 'red', answer: false }\n    ],\n    [\n      { word: 'table', answer: true },\n      { word: 'sleep', answer: false },\n      { word: 'jump', answer: false },\n      { word: 'run', answer: false }\n    ]\n  ],\n    list = lists[Math.floor(Math.random()*lists.length)];\n\n  addText(document.createElement('h5'), header, 'CHOOSE THE EXTRA WORD (use the arrows to choose the answer)');\n  addRadios(list, body, answerButton);\n  addAnswerButton(answerButton, footer);\n\n  answerButton.addEventListener('click', () => {\n    if (document.querySelector('input[checked]').value === 'true') {\n      answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addRadios(list, parent, button) {\n  const radio = document.createElement('div');\n\n  radio.innerHTML = '<pre>\\n' +\n    `<input type=\"radio\" name=\"answer\" checked value=\"${list[0].answer}\">${list[0].word}   ` +\n    `<input type=\"radio\" name=\"answer\" value=\"${list[1].answer}\">${list[1].word}   ` +\n    `<input type=\"radio\" name=\"answer\" value=\"${list[2].answer}\">${list[2].word}   ` +\n    `<input type=\"radio\" name=\"answer\" value=\"${list[3].answer}\">${list[3].word}   ` +\n    '</pre>';\n\n  parent.appendChild(radio);\n\n  document.querySelectorAll('input').forEach((item) => {\n    item.addEventListener('click', () => {\n      document.querySelector('input[checked]').removeAttribute('checked');\n      item.setAttribute('checked', 'checked');\n    });\n  });\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/extras.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/find-square/find-square.js":
/*!***********************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/find-square/find-square.js ***!
  \***********************************************************************/
/*! exports provided: createFindSquareModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFindSquareModal\", function() { return createFindSquareModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createFindSquareModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  const firstNumber = 1 + Math.floor(Math.random() * 15),\n    secondNumber = 2 + 2 * Math.floor(Math.random() * 7),\n    answer = firstNumber * secondNumber / 2;\n\n  addText(document.createElement('h5'), header, 'CALCULATE THE SQUARE OF THE TRIANGLE');\n  body.innerHTML = `<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 400px;\">\n<img height=\"300px\" src=\"./modal-dialogs/modals/tasks/find-square/img/trngl.png\"></div>`;\n\n  const condition = document.createElement('div');\n  condition.style.margin = '10px';\n  condition.innerText = `a = ${firstNumber},   b = ${secondNumber}`;\n  body.appendChild(condition);\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    if (answer == input.value) {\n      answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/find-square/find-square.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/flags/flags.js":
/*!***********************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/flags/flags.js ***!
  \***********************************************************/
/*! exports provided: createFlagsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFlagsModal\", function() { return createFlagsModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/app/modal-dialogs/modals/tasks/flags/list.js\");\n\n\n\nfunction createFlagsModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    link = randomizeAndAppendFlag(body),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  addText(document.createElement('h5'), header, 'WHICH COUNTRY\\'S FLAG IS IT? (en/ru)');\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _list__WEBPACK_IMPORTED_MODULE_1__[\"list\"][link].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\nfunction randomizeAndAppendFlag(body) {\n  const link = Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"])[Math.floor(Math.random() * Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"]).length)];\n  body.innerHTML = `<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 300px;\"><img width=\"250px\" src=\"${link}\"></div>`;\n  return link;\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/flags/flags.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/flags/list.js":
/*!**********************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/flags/list.js ***!
  \**********************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = {\n  './modal-dialogs/modals/tasks/flags/img/finland.png': ['finland', 'финляндия'],\n  './modal-dialogs/modals/tasks/flags/img/israel.png': ['israel', 'израиль'],\n  './modal-dialogs/modals/tasks/flags/img/japan.png': ['japan', 'япония'],\n  './modal-dialogs/modals/tasks/flags/img/norway.png': ['norway', 'норвегия'],\n  './modal-dialogs/modals/tasks/flags/img/turkey.png': ['turkey', 'турция']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/flags/list.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/gerund/dictionary.js":
/*!*****************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/gerund/dictionary.js ***!
  \*****************************************************************/
/*! exports provided: dict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dict\", function() { return dict; });\nconst dict = {\n  'die': 'dying',\n  'lie': 'lying',\n  'play': 'playing',\n  'drive': 'driving',\n  'swim': 'swimming'\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/gerund/dictionary.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/gerund/gerund.js":
/*!*************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/gerund/gerund.js ***!
  \*************************************************************/
/*! exports provided: createGerundModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createGerundModal\", function() { return createGerundModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ \"./src/app/modal-dialogs/modals/tasks/gerund/dictionary.js\");\n\n\n\nfunction createGerundModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button'),\n    word = Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"])[Math.floor(Math.random() * Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"]).length)];\n\n  addText(document.createElement('h5'), header, 'ADD -ing TO THE FOLLOWING WORD');\n  body.innerHTML = `<p>${word}</p>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    if (_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"][word] === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/gerund/gerund.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/math-problems.js":
/*!*************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/math-problems.js ***!
  \*************************************************************/
/*! exports provided: createMathProblemModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMathProblemModal\", function() { return createMathProblemModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createMathProblemModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  const boyNames = ['John', 'Mike', 'Tom', 'Andy', 'Rick'],\n    girlNames = ['Alis', 'Hannah', 'Lina', 'Mari', 'Julia'],\n    things = ['apples', 'kittens', 'puppies', 'flowers', 'bananas'];\n\n  const firstNumber = 15 + Math.floor(Math.random() * 21),\n    answer = 2 + Math.floor(Math.random() * 12),\n    secondNumber = firstNumber - answer,\n    thing = things[Math.floor(Math.random()*things.length)];\n\n  addText(document.createElement('h5'), header, 'SOLVE THE MATH PROBLEM');\n  body.innerHTML = `<p>${boyNames[Math.floor(Math.random()*boyNames.length)]} has ${firstNumber} \n${thing}. He wants to give ${secondNumber} ${thing} to ${girlNames[Math.floor(Math.random()*girlNames.length)]}.\nHow many ${thing} will he have after this?</p>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    if (input.value == answer) {\n      answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'number');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/math-problems.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/pictures/list.js":
/*!*************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/pictures/list.js ***!
  \*************************************************************/
/*! exports provided: list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\nconst list = {\n  './modal-dialogs/modals/tasks/pictures/img/mona_liza.jpg': ['леонардо да винчи', 'да винчи',\n    'leonardo di ser piero da vinci', 'leonardo da vinci', 'da vinci'],\n  './modal-dialogs/modals/tasks/pictures/img/girl.jpg': ['johannes vermeer', 'vermeer', 'ян вермеер', 'вермеер']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/pictures/list.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/pictures/pictures.js":
/*!*****************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/pictures/pictures.js ***!
  \*****************************************************************/
/*! exports provided: createPictureModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPictureModal\", function() { return createPictureModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list */ \"./src/app/modal-dialogs/modals/tasks/pictures/list.js\");\n\n\n\nfunction createPictureModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button'),\n    link = Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"])[Math.floor(Math.random() * Object.keys(_list__WEBPACK_IMPORTED_MODULE_1__[\"list\"]).length)];\n\n  addText(document.createElement('h5'), header, 'NAME THE ARTIST WHO PAINTED THIS (en/ru)');\n  body.innerHTML = `<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 400px;\">\n<img height=\"300px\" src=\"${link}\"></div>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _list__WEBPACK_IMPORTED_MODULE_1__[\"list\"][link].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/pictures/pictures.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/sequences.js":
/*!*********************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/sequences.js ***!
  \*********************************************************/
/*! exports provided: createSequencesModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSequencesModal\", function() { return createSequencesModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createSequencesModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  const firstNumber = Math.floor(Math.random() * 15),\n    secondNumber = 3 + Math.floor(Math.random() * 15);\n\n  const answerButton = document.createElement('button'),\n    answer = firstNumber + secondNumber * 3;\n\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n\n  addText(document.createElement('h5'), header, 'CONTINUE THE SEQUENCE');\n  body.innerHTML = `<pre>${firstNumber}   ${firstNumber + secondNumber}   ${firstNumber + secondNumber * 2}` +\n' <input type=\"text\" style=\"display: inline; width: 60px; margin: 10px;\" class=\"form-control\" placeholder=\"?\"></pre>';\n\n\n  const input = document.querySelector('input');\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  addAnswerButton(answerButton, footer, input, answer, listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addAnswerButton(button, parent, input, answer, listener) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n\n  button.addEventListener('click', () => {\n    if (input.value == answer) {\n      button.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/sequences.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/simple-math.js":
/*!***********************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/simple-math.js ***!
  \***********************************************************/
/*! exports provided: createSimpleMathModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSimpleMathModal\", function() { return createSimpleMathModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createSimpleMathModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  const characters = ['+', '-', '*'],\n    firstNumber = Math.floor(Math.random() * 15),\n    character = characters[Math.floor(Math.random() * characters.length)],\n    secondNumber = Math.floor(Math.random() * 15);\n\n  const input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  let answer = firstNumber;\n  switch (character) {\n    case '+': answer += secondNumber; break;\n    case '-': answer -= secondNumber; break;\n    case '*': answer *= secondNumber; break;\n  }\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n\n  addText(document.createElement('h5'), header, 'WRITE THE CORRECT ANSWER');\n  body.innerHTML = `<p>${firstNumber} ${character} ${secondNumber} = </p>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer, input, answer, listener);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  input.addEventListener('keyup', (e) => {\n    if (e.key === 'Enter') answerButton.click();\n  });\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'number');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent, input, answer, listener) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n\n  button.addEventListener('click', () => {\n    if (input.value == answer) {\n      button.setAttribute('value', 'true');\n      window.removeEventListener('keyup', listener);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/simple-math.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/third-person-singular/dictionary.js":
/*!********************************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/third-person-singular/dictionary.js ***!
  \********************************************************************************/
/*! exports provided: dict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dict\", function() { return dict; });\nconst dict = {\n  'miss': 'misses',\n  'carry': 'carries',\n  'watch': 'watches',\n  'play': 'plays',\n  'go': 'goes'\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/third-person-singular/dictionary.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/third-person-singular/third-person.js":
/*!**********************************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/third-person-singular/third-person.js ***!
  \**********************************************************************************/
/*! exports provided: createThirdPersonSingularModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createThirdPersonSingularModal\", function() { return createThirdPersonSingularModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ \"./src/app/modal-dialogs/modals/tasks/third-person-singular/dictionary.js\");\n\n\n\nfunction createThirdPersonSingularModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    input = document.createElement('input'),\n    answerButton = document.createElement('button'),\n    word = Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"])[Math.floor(Math.random() * Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"]).length)];\n\n  addText(document.createElement('h5'), header, 'WRITHE THE VERB IN THE 3rd PERSON SINGULAR');\n  body.innerHTML = `<p>${word}</p>`;\n  addInput(input, body, 'ANSWER');\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    if (_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"][word] === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n    }\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/third-person-singular/third-person.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/translate-to-russian/dictionary.js":
/*!*******************************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/translate-to-russian/dictionary.js ***!
  \*******************************************************************************/
/*! exports provided: dict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dict\", function() { return dict; });\nconst dict = {\n  'cat': ['кот', 'кошка', 'котик'],\n  'dog': ['собака', 'пёс', 'пес', 'собачка'],\n  'flower': ['цветок', 'цветочек'],\n  'sea': ['море'],\n  'july': ['июль'],\n  'moon': ['луна', 'месяц'],\n  'cloud': ['облако', 'облачко', 'туча', 'тучка'],\n  'banana': ['банан', 'бананчик']\n};\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/translate-to-russian/dictionary.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/tasks/translate-to-russian/translate-to-russian.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/modal-dialogs/modals/tasks/translate-to-russian/translate-to-russian.js ***!
  \*****************************************************************************************/
/*! exports provided: createTranslateToRussianModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTranslateToRussianModal\", function() { return createTranslateToRussianModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary */ \"./src/app/modal-dialogs/modals/tasks/translate-to-russian/dictionary.js\");\n\n\n\nfunction createTranslateToRussianModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer'),\n    word = Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"])[Math.floor(Math.random() * Object.keys(_dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"]).length)],\n    input = document.createElement('input'),\n    answerButton = document.createElement('button');\n\n  addText(document.createElement('h5'), header, 'TRANSLATE INTO RUSSIAN');\n  body.innerHTML = `<p>${word}</p>`;\n  addInput(input, body, 'ANSWER');\n\n  addAnswerButton(answerButton, footer);\n\n  input.addEventListener('input', () => {\n    if (input.value.length > 0) {\n      answerButton.removeAttribute('disabled');\n    } else {\n      answerButton.setAttribute('disabled', 'disabled');\n    }\n  });\n\n  answerButton.addEventListener('click', () => {\n    _dictionary__WEBPACK_IMPORTED_MODULE_1__[\"dict\"][word].forEach((item) => {\n      if (item === input.value.toLowerCase()) {\n        answerButton.setAttribute('value', 'true');\n      }\n    });\n    window.removeEventListener('keyup', listener);\n  });\n\n  function listener(e) {\n    if (e.key === 'Enter') answerButton.click();\n  }\n  window.addEventListener('keyup', listener);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\nfunction addInput(input, parent, placeholder) {\n  input.classList.add('form-control');\n  input.setAttribute('type', 'text');\n  input.setAttribute('placeholder', placeholder);\n  parent.appendChild(input);\n}\n\nfunction addAnswerButton(button, parent) {\n  button.className = 'btn btn-success btn-lg btn-block';\n  button.innerText = 'OK';\n  button.setAttribute('disabled', 'disabled');\n  parent.appendChild(button);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/tasks/translate-to-russian/translate-to-russian.js?");

/***/ }),

/***/ "./src/app/modal-dialogs/modals/true.js":
/*!**********************************************!*\
  !*** ./src/app/modal-dialogs/modals/true.js ***!
  \**********************************************/
/*! exports provided: createTrueModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTrueModal\", function() { return createTrueModal; });\n/* harmony import */ var _modal_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal-dialog */ \"./src/app/modal-dialogs/modal-dialog.js\");\n\n\nfunction createTrueModal() {\n  Object(_modal_dialog__WEBPACK_IMPORTED_MODULE_0__[\"createModal\"])();\n\n  const header = document.querySelector('.modal-header'),\n    body = document.querySelector('.modal-body'),\n    footer = document.querySelector('.modal-footer');\n\n  header.remove();\n  footer.remove();\n  addText(document.createElement('h3'), body, 'TRUE!');\n\n  document.querySelector('.modal-content').classList.add('text-white');\n  document.querySelector('.modal-content').classList.add('bg-success');\n\n  setTimeout(() => document.querySelector('.modal-wrap').remove(), 1300);\n}\n\nfunction addText(tag, parent, str) {\n  tag.className = 'modal-title';\n  tag.innerText = str;\n  parent.appendChild(tag);\n}\n\n\n//# sourceURL=webpack://myApp/./src/app/modal-dialogs/modals/true.js?");

/***/ })

/******/ });
