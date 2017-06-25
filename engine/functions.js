/*
 *! functions.js
 *
 * Todos os arquivos do Instalador (página em si) encontram-se aqui.
 * Copyright (c) 2017. Todos os direitos reservados.
 *
 * MIT Licence.
 */

'use strict';

var install = {
  log: function (log) {
    $('.install-log ul').append('<li class="install-log">' + log + '</li>');
  },
  
  sucess: function (log) {
    $('.install-log ul').append('<li class="install-log log-sucess">' + log + '</li>');
  },
  
  warn: function (log) {
    $('.install-log ul').append('<li class="install-log log-warn">' + log + '</li>');
  },
  
  error: function (log) {
    $('.install-log ul').append('<li class="install-log log-error">' + log + '</li>');
  }
};

$(window).on('load', function () {
  install.sucess('A página JavaScript principal foi carregada com sucesso!');
  install.sucess('A página JavaScript das funções gerais foi carregada com sucesso!');
  console.log('[Instalador] Página carregada! [functions.js]');
});
