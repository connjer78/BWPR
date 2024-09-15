TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      icon: 'https://example.com/icon.png',
      text: 'Run Script',
      callback: function (t) {
        var cardId = t.card('id');
        var webAppUrl = 'https://script.google.com/macros/s/your-web-app-id/exec?cardId=' + cardId;
        return t.popup({
          title: 'Running Script',
          url: webAppUrl
        });
      }
    }];
  }
});
