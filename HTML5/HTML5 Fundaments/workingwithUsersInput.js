//Native Validation
// value missing rules evaluates to true if an element marked as requiared has an ampty value
<input type="text" required value="" />;

//Type missmatch validation rules: true when the value is not matched to declared type
<input type="url" value="hi" />;
// Pattern Mishmatch true when an element's alue doesnot match given regular expression
<input type="text" pattern="/^[A-z]+$/" value="1234" />;
//Too long rule evaluates to true when an element's value length is longer than the value in the maxLength arrtibute
<input type="text" maxLength="3" value="1234" />;

//Range Underflow reruens true when a range type's value is smaller than the min attribute
<input type="range" min="3" max="5" value="0" />;

//Range overflow : true when a range type's value is grater than the max attribute
//Step mishaptch : true when a range type input's value is impossible given the step value
<input type="range" min="3" max="5" step="5" value="0" />;

//Valid rule: true when all other validation rules return false
<input type="range" min="5" max="20" step="5" value="10" />;
