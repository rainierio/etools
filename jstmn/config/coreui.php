<?php

return [

    /*
     * If you don't want to use package assets you can disable automatic publishing them
     * to `public` directory of project by setting this option to `false`
     */

    'publish_assets' => true,

    /*
     * Styles and scripts to be autoloaded by template
     */

    'styles' => [
        'admin-fonts' => 'coreui::css/fonts.css',
        'admin-default' => ['coreui::css/coreui-app.css', ['admin-fonts']],
    ],

    'scripts' => [
        'admin-default' => 'coreui::js/coreui-app.js',
//        'admin-modules-load' => 'coreui::js/modules.js',
    ],

];
