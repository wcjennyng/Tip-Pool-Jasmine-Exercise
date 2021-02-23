describe("Helpers tests (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 200;
      tipAmtInput.value = 50;
      submitPaymentInfo();
    });
    it('should sum total bill amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('billAmt')).toEqual(200);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('billAmt')).toEqual(400);
    });
  
    it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipAmt')).toEqual(50);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipAmt')).toEqual(90);
    });
    
    it('should sum total tip percent on sumPaymentTotal()', function () {
      expect(sumPaymentTotal('tipPercent')).toEqual(25);
  
      billAmtInput.value = 200;
      tipAmtInput.value = 40;
  
      submitPaymentInfo();
  
      expect(sumPaymentTotal('tipPercent')).toEqual(45);
    });
  
    it('should convert bill and tip amt to tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(200, 50)).toEqual(25);
      expect(calculateTipPercent(100, 20)).toEqual(20);
    });
  
    it('should create new td and append to tr on appendTd', function () {
        let newTr = document.createElement('tr');
    
        appendTd(newTr, 'value');
    
        expect(newTr.firstChild.innerHTML).toEqual('value');
    });
    
    it('should create delete td and append to tr on appendDeleteBtn', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
  });