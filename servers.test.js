describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on sumbitServerInfo() if empty', () => {
    serverNameInput.value = ''
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let td = document.querySelectorAll('#serverTable tbody tr td');

    expect(td.length).toEqual(2);
    expect(td[0].innerText).toEqual('Alice');
    expect(td[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    // teardown logic
    allServers = {}
    serverId = 0
    serverTbody.innerHTML = ''
  });
});

