export default function(key){
  var themes = ['App-dark-theme','App-light-theme'];
  return themes[key] || themes[0];
 }