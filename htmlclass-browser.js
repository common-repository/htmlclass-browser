$ = jQuery;	

$(document).ready(function(){
	var name,browser = navigator.userAgent;
    var names={ie:'Internet Explorer',fi:'Firefox',op:'Opera',sa:'Apple Safari', ch:"Chrome", x:"Other"};
    if (/bot|googlebot|facebook|slurp|wii|silk|blackberry|mediapartners|adsbot|silk|android|phone|bingbot|google web preview|like firefox|chromeframe|seamonkey|opera mini|min|meego|netfront|moblin|maemo|arora|camino|flot|k-meleon|fennec|kazehakase|galeon|android|mobile|iphone|ipod|ipad|epiphany|rekonq|symbian|webos/i.test(browser)) n="x";
    else if (/Trident.*rv:(\d+\.\d+)/i.test(browser)) name="ie";
    else if (/MSIE.(\d+\.\d+)/i.test(browser)) name="ie";
    else if (/OPR.(\d+\.\d+)/i.test(browser)) name="op";
    else if (/Chrome.(\d+\.\d+)/i.test(browser)) name="ch";
    else if (/Firefox.(\d+\.\d+)/i.test(browser)) name="fi";
    else if (/Version.(\d+.\d+).{0,10}Safari/i.test(browser))	name="sa";
    else if (/Safari.(\d+)/i.test(browser)) name="sa";
    else if (/Opera.*Version.(\d+\.\d+)/i.test(browser)) name="op";
    else if (/Opera.(\d+\.?\d+)/i.test(browser)) name="op";
    else return {name:"x"};
    $('html').attr('class',name);
});