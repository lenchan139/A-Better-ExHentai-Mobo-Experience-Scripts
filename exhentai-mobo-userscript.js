// ==UserScript==
// @name         Make sad panda mobobility!
// @namespace    https://tto.moe/
// @version      0.1
// @description  try to take over the world!
// @author       Len Chan
// @match        https://exhentai.org/*
// @match        https://e-hentai.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=exhentai.org
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    // inject viewport first 
    var meta = document.createElement('meta');
    meta.name = 'viewport'
    meta.content = 'width=device-width, initial-scale=1"'
    // meta.outerHTML = '<meta name="viewport" content="width=device-width, initial-scale=1" />'
    var htmls = document.getElementsByTagName('html')
    if (htmls && htmls.length > 0) {
        var html = htmls[0]
        html.appendChild(meta)
    }

    // first change nbar
    var nb = document.getElementById('nb')
    if (nb && nb.style) {
        // nbar is exist so do some magic
        nb.style.maxHeight = '100%'
        nb.style.minHeight = ''
        nb.style.fontSize = '1.2rem'
        nb.style.maxWidth = 'auto'
        nb.style.minWidth = 'auto'
        nb.style.lineHeight = '2rem'
    }

    var outerframes = document.getElementsByClassName('ido')
    if (outerframes && outerframes.length > 0) {
        var outerframe = outerframes[0]
        if (outerframe.style) {
            outerframe.style.maxHeight = 'auto'
            outerframe.style.maxWidth = 'auto'
            outerframe.style.minHeight = 'auto'
            outerframe.style.minWidth = 'auto'
        }
    }


    var serachbox = document.getElementById('searchbox')
    if (serachbox && serachbox.style) {
        serachbox.style.width = 'auto'
        var f_search_input = document.getElementById('f_search')
        if (f_search_input && f_search_input.style) {
            f_search_input.style.width = '90%'
        }
        var catTables1 = serachbox.getElementsByClassName('itc')
        if (catTables1 && catTables1.length > 0) {
            var cattable = catTables1[0]
            if (cattable && cattable.style) {
                var tbody = cattable.getElementsByTagName('tbody')
                if (tbody && tbody.length > 0) {
                    for (var o of tbody) {
                        var element = document.createElement('div');
                        element.innerHTML = o.innerHTML
                        cattable.replaceChild(element, o)
                        element.className = 'tbody_c'
                    }
                }

                var tr = cattable.getElementsByTagName('tr')
                if (tr && tr.length > 0) {
                    for (var o of tr) {
                        var element = document.createElement('div');
                        element.innerHTML = o.innerHTML
                        cattable.replaceChild(element, o)
                        element.className = 'tr_c'
                    }
                }

                var td = cattable.getElementsByTagName('td')
                if (td && td.length > 0) {
                    for (var o of td) {
                        var element = document.createElement('div');
                        element.innerHTML = o.innerHTML
                        cattable.replaceChild(element, o)
                        element.className = 'td_c'
                    }
                }
                var catClickables = cattable.getElementsByClassName('cs')
                if (catClickables && catClickables.length > 0) {
                    for (var o of catClickables) {
                        if (o && o.style) {
                            o.style.margin = '10px 5px'
                            o.style.fontSize = '1.2rem'
                            o.style.height = '1.2rem'
                        }
                    }
                }
            }
        }

    }

    var rangebar = document.getElementById('rangebar')
    if (rangebar && rangebar.style) {
        rangebar.style.width = '100%'
        rangebar.style.height = 'auto'
        rangebar.style.display = 'flex'
        rangebar.style.flexWrap = 'wrap'
        if (rangebar.childNodes && rangebar.childNodes.length > 0) {
            var index = 1
            for (var o of rangebar.childNodes) {
                if (o && o.style) {
                    o.style.margin = '1px 3px'
                    var div = o.getElementsByTagName('div')
                    if (div && div.length > 0) {
                        var d = div[0]
                        if (d && d.style) {
                            d.style.width = '1.3rem'
                            d.style.height = '1.3rem'
                            d.style.fontSize = '1.2rem'
                            d.style.paddingLeft = '5px'
                            d.style.margin = '6px'
                            d.style.color = 'black'
                            d.innerText = index
                        }
                    }
                }
                index++;
            }
        }
    }

    var dps = document.getElementsByClassName('dp')
    if (dps && dps.length > 0) {
        for (var dp of dps) {
            if (dp && dp.style) {
                dp.style.width = '100%'
                dp.style.fontSize = '1rem'
            }
        }
    }

    var arr_searchnav = document.getElementsByClassName('searchnav')
    if (arr_searchnav && arr_searchnav.length > 0) {
        for (var o of arr_searchnav) {
            var searchnav = o
            if (searchnav && searchnav.style) {
                searchnav.style.whiteSpace = 'initial'
                var selectedNodes = searchnav.getElementsByTagName('select')
                if (selectedNodes && selectedNodes.length > 0) {
                    var selectN = selectedNodes[selectedNodes.length - 1]
                    if (selectN && selectN.selectedOptions && selectN.selectedOptions.length > 0) {
                        var sOptions = selectN.selectedOptions[0]
                        if (sOptions && sOptions.innerText == 'Extended') {
                            // if extended do nothing
                            selectN.style.display = 'none'
                        } else {
                            // selectN.value = 'e'
                            if (location.pathname.includes('favorites.php')) {

                            } else {
                                location.href = location.href + '?inline_set=dm_e'
                            }
                        }
                    }
                }

            }
        }
    }
    // for fav page only
    if (location.pathname.includes('favorites.php')) {
        var nosel = document.getElementsByClassName('nosel')
        if (nosel && nosel.length > 0) {
            for (const o of nosel) {
                if (o && o.style) {
                    o.style.width = 'auto'
                }
            }
        }
        const qsearch = document.querySelector('body > div.ido > div:nth-child(3) > form > div > input[type=text]:nth-child(1)')
        if (qsearch && qsearch.style) {
            qsearch.style.width = '90%'
        }
        const qsearchOuter = document.querySelector('body > div.ido > div:nth-child(3)')
        if (qsearchOuter && qsearchOuter.style) {
            qsearchOuter.style.width = 'auto'
        }
        var searchnav = document.getElementsByClassName('searchnav')
        if (searchnav && searchnav.length > 0) {
            for (const nav of searchnav) {
                const favact = nav.querySelector('#favact')
                if (favact && favact.style) {
                    const clonedFavact = favact.cloneNode(true)
                    nav.parentElement.appendChild(clonedFavact)
                    favact.innerHTML = ''
                    favact.id = ''
                }

                const v = nav.getElementsByTagName('div')
                if(v && v.length > 0){
                    for(const o of v){
                        if(o && o.innerText.includes('Order')){
                            const clonedObj = o.cloneNode(true)
                            nav.parentElement.appendChild(clonedObj)
                            o.innerHTML = ''
                        }
                    }
                }

            }
        }
    }
    //end of fav page

    var gallery_listing = document.getElementsByClassName('itg')
    if (gallery_listing && gallery_listing.length > 0) {
        for (const list of gallery_listing) {
            if (list && list.style) {

                var div = list.getElementsByTagName('div')
                if (div && div.length > 0) {
                    for (var o of div) {
                        if (o && o.style) {
                            o.style.width = 'auto'
                            o.style.height = 'auto'
                        }
                    }
                }
                const imgs=    list.getElementsByClassName('img')
                if(imgs && imgs.length > 0){
                    for(const img of imgs){
                        if(img && img.style){
                            img.style.width = '100%'
                            img.style.height = 'auto'
                        }
                    }
                }
                var tbody = list.getElementsByTagName('tbody')
                if (tbody && tbody.length > 0) {
                    for (const o of tbody) {
                        const element = document.createElement('div');
                     
                        element.className = 'tbody_c'
                        element.innerHTML = o.innerHTML
                        o.parentElement.replaceChild(element, o)
                     
                    }
                }

                var tr = list.getElementsByTagName('tr')
                if (tr && tr.length > 0) {
                    for (const o of tr) {
                        const element = document.createElement('div');
                        element.className = 'tr_c'
                        element.innerHTML = o.innerHTML
                        o.parentElement.replaceChild(element, o)
                    }
                }

                var td = list.getElementsByTagName('td')
                if (td && td.length > 0) {
                    for (const o of td) {
                        const element = document.createElement('div');
                        element.className = 'td_c'
                        element.innerHTML = o.innerHTML

                        o.parentElement.replaceChild(element, o)
                    }
                }

                let gl3e = list.getElementsByClassName('gl3e')
                if (gl3e && gl3e.length > 0) {
                    for (const g of gl3e) {
                        const p = g.parentElement
                        if (p && p.style) {
                            p.style.display = 'flex'
                        }
                    }
                }
                let vsc = document.querySelectorAll('.tbody_c img')
                if(vsc && vsc.length > 0){
                    for(const img of vsc){
                        img.style.width = '100%'
                        img.style.height = 'auto'
                    }
                }
            }
        }
    }



    // Thumbnail page header
    var thumbnailHeaders = document.getElementsByClassName('gm')
    if (thumbnailHeaders && thumbnailHeaders.length > 0) {
        for (const o of thumbnailHeaders) {
            if (o && o.style) {
                o.style.width = 'auto'
                o.style.height = 'auto'
                o.style.minWidth = 'auto'
            }
        }
    }
    var thuumbnailPageTtitle = document.getElementById('gd2')
    if (thuumbnailPageTtitle && thuumbnailPageTtitle.style) {
        thuumbnailPageTtitle.style.float = 'initial'
        thuumbnailPageTtitle.style.width = 'auto'
        thuumbnailPageTtitle.style.height = 'auto'
    }
    var gmid = document.getElementById('gmid')
    if (gmid && gmid.style) {
        gmid.style.width = 'auto'
        gmid.style.height = 'auto'
        gmid.style.float = 'initial'
        gmid.style.position = 'initial'
        gmid.style.display = 'flex'
        gmid.style.flexDirection = 'column'

    }
    var gdo = document.getElementById('gdo')
    if (gdo && gdo.style) {
        gdo.style.width = 'auto'
        gdo.style.minWidth = 'auto'
        gdo.style.display = 'flex'
    }

    // var gdo2 = document.getElementById('gdo2')
    // if (gdo2 && gdo2.style) {
    //     gdo2.style.width = 'auto'
    //     gdo2.style.minWidth = 'auto'
    // }

    // var gdo4 = document.getElementById('gdo4')
    // if (gdo4 && gdo4.style) {
    //     gdo4.style.width = 'auto'
    //     gdo4.style.minWidth = 'auto'
    // }

    var gtb = document.getElementsByClassName('gtb')
    if (gtb && gtb.length > 0) {
        for (const list of gtb) {

            if (list && list.style) {
                list.style.width = 'auto'
                list.style.minWidth = 'auto'
                const t = list.getElementsByTagName('table')
                if (t && t.length > 0) {
                    for (const o of t) {
                        if (o && o.style) {
                            o.style.margin = '2px'
                        }
                    }
                }

            }
        }
    }
    var gdt = document.getElementById('gdt')
    if (gdt && gdt.style) {
        gdt.style.width = 'auto'
        gdt.style.minWidth = 'auto'

        const y = gdt.getElementsByClassName('gdtl')
        if (y && y.length > 0) {
            for (const o of y) {
                if (o && o.style) {
                    o.style.height = 'auto'
                }
            }
        }
    }

    //viewing image viewer
    var i1 = document.getElementById('i1')
    if (i1 && i1.style) {
        i1.style.width = 'auto'
        i1.style.height = 'auto'
        i1.style.minWidth = 'auto'

        const img = document.getElementById('img')
        if (img && img.style) {
            img.style.width = '100%'
            img.style.height = 'auto'
            img.style.minWidth = 'auto'
            img.style.minHeight = 'auto'
        }
    }

})();

