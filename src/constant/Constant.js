export const Settings={
  "Step": [
    {
      "title": "Step_1",
      "fields": [
{ "name": "full_name", "label": "FULL NAME", "type": "text", "validate": true },
{ "name": "email", "label": "EMAIL ID", "type": "text", "validate": true },
{ "name": "mobile_number", "label": "MOBILE NUMBER", "type": "number", "validate": true }
      ]
    },
    {
      "title": "Step_2",
      "fields": [
{ "name": "experience", "label": "EXPERIENCE", "type": "text", "validate": false },
{ "name": "ctc", "label": "CTC", "type": "text", "validate": false },
{ "name": "city", "label": "CURRENT CITY", "type": "dropdown", "options": ["Mumbai", "Bengaluru", "Vadodara"], "validate": true },
      ]
    }
  ]
}
export function validateEmail(emailField){
  
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(emailField) == false) 
  {
      return false;
  }
  return true;
}
