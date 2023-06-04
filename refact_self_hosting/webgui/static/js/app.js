import * as model_hosting_tab from  './tab-model-hosting.js';
import * as upload_tab from './tab-upload.js';
import * as finetune_tab from './tab-finetune.js';
import * as access_control_tab from './tab-access-contol.js';

let comming_soon;

function display_comming_soon() {
    comming_soon = document.querySelectorAll(".temp-disabled");
    comming_soon_render();
    window.addEventListener("resize", function() {
        comming_soon_resize();
    });

    document.addEventListener('shown.bs.tab', function(e) {
        comming_soon_resize();
    });
}
function comming_soon_render() {
    comming_soon.forEach(function(element) {
        const info = element.parentNode.insertBefore(document.createElement("div"), element.nextSibling);
        info.classList.add("temp-info");
        info.innerHTML = "Coming soon";
        info.style.marginLeft = ((element.getBoundingClientRect().width / 2 ) - (info.getBoundingClientRect().width / 2 )) + "px";
        info.style.marginTop = ((element.getBoundingClientRect().height / 2 ) * -1 - (info.getBoundingClientRect().height / 2 )) + "px";
    });
}
function comming_soon_resize()  {
    comming_soon.forEach(function(element) {
        const info = element.nextSibling;
        info.style.marginLeft = ((element.getBoundingClientRect().width / 2 ) - (info.getBoundingClientRect().width / 2 )) + "px";
        info.style.marginTop = ((element.getBoundingClientRect().height / 2 ) * -1 - (info.getBoundingClientRect().height / 2 )) + "px";
    });
}
display_comming_soon();
model_hosting_tab.init();
document.addEventListener('shown.bs.tab', function(e) {
    switch (e.target.id) {
        case "model-tab":
            model_hosting_tab.init();
            break;
        case "upload-tab":
            upload_tab.init();
            break;
        case "finetune-tab":
            finetune_tab.init();
            break;
        case "access-control-tab":
            access_control_tab.init();
            break;
    }
});