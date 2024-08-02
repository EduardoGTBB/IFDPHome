/*(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-78565449-1', 'auto');
ga('send', 'pageview');*/

  
    /*This function will load script and call the callback once the script has loaded*/
function loadScriptAsync(scriptSrc, callback) {
    if (typeof callback !== 'function') {
        throw new Error('Not a valid callback for async script load');
    }
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

/* This is the part where you call the above defined function and "call back" your code which gets executed after the script has loaded */
loadScriptAsync('https://www.googletagmanager.com/gtag/js?id=G-JKYM6HDYN4', function(){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
 
  /*gtag('create', 'UA-78565449-1', 'auto');
  gtag('send', 'pageview');*/
  
  gtag('js', new Date());
  gtag('config', 'G-JKYM6HDYN4');
})
