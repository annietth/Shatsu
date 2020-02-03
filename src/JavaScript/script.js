function loadPage(name, action) {
    return fetch('../homepage/' + name + '.html').then(function(response) {
      if (response.ok) {
        response.text().then(function(html) {
          document.body.innerHTML = html;
          document.body.setAttribute('class', name);
          if (action) {
            action.call();
          }
        });
      }
    })}

loadPage("homepage")