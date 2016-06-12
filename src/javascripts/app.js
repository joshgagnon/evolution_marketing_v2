import './modules'
import 'jquery'
import 'bootstrap-sass/assets/javascripts/bootstrap/collapse.js'

[].map.call(document.querySelectorAll('a.external-link'), function(link){
    link.target="_blank";
});