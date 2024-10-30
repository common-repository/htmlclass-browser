<?php
/*

Plugin Name: HTML class for diferent browsers
Description: This plugin adds a class with the name of the client browser.
Version: 1.0
Author: Álvaro Salinero Méndez

*/
add_action('init', 'insert_js');

function insert_js () {
	$js_file = plugins_url( 'htmlclass-browser.js', __FILE__ );
	wp_enqueue_script('htmlclass_browser', $js_file, array('jquery') );
}