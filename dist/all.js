/*
 *! all.js
 *
 * Todos os arquivos do projeto serão compilados aqui.
 * Copyright (c) 2017. Todos os direitos reservados.
 *
 * MIT Licence.
 */

(function ($) {
  'use strict';

  $(function () {
    // Script com todas as funções da página do Instalador:
    $.getScript('page.js');
    
    // Script com todos os tutoriais:
    $.getScript('tutorials.js');

    // Script com as funções AJAX do ACP:
    $.getScript('ajax.js');
  });

  $(window).on('load', function () {
    console.log('[Instalador] Página carregada! [all.js]');
  });
}(jQuery));
