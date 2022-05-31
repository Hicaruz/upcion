
import React from "react";
import jsPDF from "jspdf";

import background from "./UPCION_FichaDatos-1.jpg"
import moment from "moment"
const rect = (doc, x, y, w, h) => {

    doc.setDrawColor(191, 191, 191);
    doc.setLineWidth(0.25)
    doc.line(x, y, x + w, y)
    doc.line(x, y + h, x + w, y + h)
    doc.line(x, y, x, y + h)
    doc.line(x + w, y, x + w, y + h)
}

function moneyFormat(value) {
    if (typeof value === "string") {
        return process.env.REACT_APP_CURRENCY + (value.replace(/\B(?=(\d{3})+(?!\d))/g, ","))

    }
    return process.env.REACT_APP_CURRENCY + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
function unitFormat(value) {

    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
let baseyheaders = 91.5
let yheaders = 91.5

const cellheight = 8.5

function getHeight() {
    const tmpyheaders = yheaders + cellheight
    yheaders = yheaders + cellheight
    return tmpyheaders

}
function resetHeight() {
    yheaders = baseyheaders
}
function emptyJump(n = 1) {
    let _n = n
    while(_n > 0){
        yheaders = yheaders + cellheight
        --_n
    }
}
function setSector(n = 1) {
   if(n === 1){
    baseyheaders = 91.5
   }
   if(n === 2){
    baseyheaders = 140.5
   }
   if(n === 3){
    baseyheaders = 168
   }
   resetHeight()
}
const generatePDF = (data) => {

    const doc = new jsPDF();
    doc.setLineWidth(0.1);
    doc.setTextColor(150, 150, 150);
    doc.setFontSize(8)

    const [day, month, year] =  moment().format("DD/MM/YYYY").split("/")

    const pageHeight = doc.internal.pageSize.height
    const pageWidth = doc.internal.pageSize.width
    doc.addImage(background, "JPEG", 0, 0, pageWidth, pageHeight)

    doc.text(day, 152, 49.5);
    doc.text(month, 168, 49.5);
    doc.text(year, 184, 49.5);


    doc.text(data.fisrt_last_name, 20, getHeight());
    doc.text(data.first_name, 20, getHeight());
    doc.text(data.born_date, 20, getHeight());
    doc.text(data.address, 20, getHeight());
    doc.text(data.home_phone, 20, getHeight());

    resetHeight()
    emptyJump(3)

    doc.text(data.departament, 100, getHeight());
    doc.text(data.mobile_phone, 100, getHeight());

    resetHeight()

    doc.text(data.second_last_name, 110, getHeight());
    doc.text(data.second_name, 110, getHeight());
    doc.text(data.personal_document, 110, getHeight());

    resetHeight()
    emptyJump(3)

    doc.text(data.municip, 150, getHeight());
    doc.text(data.email, 150, getHeight());

    resetHeight()
    setSector(2)

    doc.text(data.amount, 20, getHeight());
    doc.text(data.bank, 20, getHeight());
    doc.text(data.bank_account, 20, getHeight());

    resetHeight()

    doc.text(data.time, 110, getHeight());
    doc.text(data.interest, 110, getHeight());
    doc.text(data.bank_account_type, 110, getHeight());

    setSector(3)

    doc.text(data.ben_fisrt_last_name, 20, getHeight());
    doc.text(data.ben_first_name, 20, getHeight());
    doc.text(data.ben_born_date, 20, getHeight());
    doc.text(data.ben_address, 20, getHeight());
    doc.text(data.ben_mobile_phone, 20, getHeight());

    resetHeight()
    emptyJump(3)
    
    doc.text(data.ben_departament, 100, getHeight());
    doc.text(data.ben_email, 100, getHeight());

    resetHeight()

    doc.text(data.ben_second_last_name, 110, getHeight());
    doc.text(data.ben_second_name, 110, getHeight());
    doc.text(data.ben_personal_document, 110, getHeight());

    resetHeight()
    emptyJump(3)

    doc.text(data.ben_municip, 150, getHeight());
    doc.text(data.ben_percent, 150, getHeight());

    window.open(doc.output('bloburl'), '_blank');


};

export default generatePDF;