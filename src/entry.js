import updateTerms, {calculate} from "./main.js";
import "./style.css"
import './hhwidget.js';

updateTerms();
var termSelect = document.getElementById("depositType");
termSelect.onchange = updateTerms;
var btn = document.getElementById("btn");
btn.onclick = calculate;