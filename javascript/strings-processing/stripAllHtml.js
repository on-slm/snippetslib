	// stolen from: https://github.com/duckduckgo/duckduckgo-utils/blob/master/util.js
    
	/**
     * More aggressive version strip_html that is capable
     * of stripping malformed html by converting tags to entities.
     *
     * http://stackoverflow.com/questions/295566/sanitize-rewrite-html-on-the-client-side/430240#430240
     *
     * @param {string}
     * @return {string}
     */
    DDG.strip_all_html = function(html) {
        var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*',
            tagOrComment = new RegExp(
                '<(?:' +
                // Comment body.
                '!--(?:(?:-*[^->])*--+|-?)' +
                // Special "raw text" elements whose content should be elided.
                '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*' +
                '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*' +
                // Regular name
                '|/?[a-z]' +
                tagBody +
                ')>',
            'gi'),
            oldHtml;

        while (html !== oldHtml) {
            oldHtml = html;
            html = html.replace(tagOrComment, '');
        }

        return html.replace(/</g, '&lt;');
