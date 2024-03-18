// rules.js
var rules = [
    {
        match: /https...atlassian-[a-z.]+.jira.browse/g,
        replace: function(match) {
            return '';
        }
    },
    {
        match: /\bGIS-\d+\b/g,
        replace: function(match) {
            let n = localStorage.getItem('url_GIS');
            if(n) {
                return '<a href="' + n + match + '">' + match + '</a>';
            }
            return match;
        }
    },
    // Add more rules as needed
];
