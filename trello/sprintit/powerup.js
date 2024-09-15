TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      text: 'Sprint It!',
      callback: function (t) {
        var cardId = t.card('id');
        var webAppUrl = 'https://script.google.com/macros/s/1wPL4EF5xbswPIJ556OJvM6BJVan7T2q58ZpM8uhAHrfz1uyp8z509xXA/exec?cardId=' + cardId;
        return t.popup({
          title: 'Running Script',
          url: webAppUrl
        });
      }
    }];
  }
});
