
var amount;
var principal = 1000;
var rate = 0.05;
var year;
var rowsClasses = [" ","table-info","table-primary", "table-light", "table-success", "table-danger", "table-warning", "table-info", "table-primary", "table-success", "table-info" ];
document.writeln("<p><h2>Annual Deposit of 1000 and final year amount at different Compound Intrest Rates</h2></p>");
document.writeln("<p><h2>using Javascript and Bootstrap</h2></p>");
for ( var counter = 1; counter <= 5; counter++)
{
  document.writeln("<div class='container-fluid col-9'>");
  document.writeln("<table class=' table-active table-xsm table-hover'>");
  document.writeln("<caption>Compound Interest Rate, Rate: " + rate.toFixed(2) + "</caption>");
  document.writeln("<thead><tr><th>Year</th><th>Amount</th></tr></thead><tbody>");
    for ( year = 1; year <= 10; year++)
    {
      amount = principal * Math.pow( 1.0 + rate, year);
      document.writeln("<tr class = " + rowsClasses[year] + "><td>" + year + "</td><td>" + amount.toFixed(2) + "</td></tr>");
    }
  document.writeln("</tbody></table>");
  document.writeln("</div>");
  rate = rate + 0.01;
  rate.toFixed(2);
  principal = 1000;
}
