module.exports = ({ name, systolic, diastolic, pulse, glucose, weight }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .patient-info {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .patient-info table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .patient-info table td {
             padding: 5px;
             vertical-align: top;
             }
             .patient-info table tr td:nth-child(2) {
             text-align: right;
             }
             .patient-info table tr.top table td {
             padding-bottom: 20px;
             }
             .patient-info table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .patient-info table tr.information table td {
             padding-bottom: 40px;
             }
             .patient-info table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .patient-info table tr.details td {
             padding-bottom: 20px;
             }
             .patient-info table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .patient-info table tr.item.last td {
             border-bottom: none;
             }
             .patient-info table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .patient-info table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .patient-info table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="patient-info">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"> Patient First
                            </td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Patient name: ${name}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Systolic</td>
                   <td>${systolic}</td>
                </tr>
                <tr class="item">
                   <td>Diastolic:</td>
                   <td>${diastolic}</td>
                </tr>
                <tr class="item">
                   <td>Pulse:</td>
                   <td>${pulse}</td>
                </tr>
                <tr class="item">
                <td>Glucose:</td>
                <td>${glucose}</td>
             </tr>
             </tr>
             <tr class="item">
             <td>Weight:</td>
             <td>${weight}</td>
          </tr>
             </table>
          </div>
       </body>
    </html>
    `;
};