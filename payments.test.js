describe("Payments test (with setup and tear-down)", function() {
    beforeEach(()=> {
        billAmtInput.value = 200;
        tipAmtInput.value = 50;
    });

    it ('should add a new payment to allPayments on submitPaymentInfo()', ()=> {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('200');
        expect(allPayments['payment1'].tipAmt).toEqual('50');
        expect(allPayments['payment1'].tipPercent).toEqual(25);
    });

    it ('should not add a new payment on submitPaymentInfo() if empty', ()=>{
        billAmtInput.value = '';
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create a new payment on createCurPayment()', ()=> {
        const paymentTest = {
          billAmt: '200',
          tipAmt: '50',
          tipPercent: 25,
        };
    
        expect(createCurPayment()).toEqual(paymentTest);
      });

      it('should create a new payment on createCurPayment() if tipAmt is 0', ()=> {
        tipAmtInput.value = '0';
        const paymentTipZero = { 
            billAmt: '200', 
            tipAmt: '0', 
            tipPercent: 0 
        };
    
        expect(createCurPayment()).toEqual(paymentTipZero);
      });

      it('should update payment #paymentTable on appendPaymentTable()', ()=>{
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);
        
        let td = document.querySelectorAll('#paymentTable tbody tr td');
        
        expect(td.length).toEqual(3);
        expect(td[0].innerText).toEqual('$200');
        expect(td[1].innerText).toEqual('$50');
        expect(td[2].innerText).toEqual('25%');
      });

    afterEach(()=>{
        billAmtInput.value = '';
        tipAmtInput.value = '';
        serverTbody.innerHTML = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});
