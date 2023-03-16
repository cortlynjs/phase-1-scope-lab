// Fix the Scope

// 1) declare customerName to be bob 
var customerName = 'bob';

function upperCaseCustomerName() {
  // 2)change  the customerName variable to its uppercase version
  customerName = customerName.toUpperCase();
}

// 3) define setBestCustomer function to set the bestCustomer variable to a specific value
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4) define overwriteBestCustomer function to overwrite the value of the bestCustomer variable with a new value
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5) define changeLeastFavoriteCustomer function to reassign the leastFavoriteCustomer variable to a new value
function changeLeastFavoriteCustomer() {
    const leastFavoriteCustomer = 'initial value';
    leastFavoriteCustomer = 'new value';
  }
  
  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });