import DBService from "./db";

const dbService = new DBService("email-db", "emails");

export async function createEmail(email){
    const { from, to, cc } = email;
    await dbService.readItem(`sent:${from}`).then(emails => {
        if (emails) {
          dbService.updateItem(`sent:${from}`, [ ...emails, email]);
        } else {
          dbService.createItem(`sent:${from}`, [email]);
        }
    });
    await dbService.readItem(`received:${to}`).then(emails => {
        if (emails) {
          dbService.updateItem(`received:${to}`, [ ...emails, email]);
        } else {
          dbService.createItem(`received:${to}`, [email]);
        }
    });
    await dbService.readItem(`received:${cc}`).then(emails => {
        if (emails) {
          dbService.updateItem(`received:${cc}`, [ ...emails, email]);
        } else {
          dbService.createItem(`received:${cc}`, [email]);
        }
    });
}

export function readEmails(emailId, type){
    return dbService.readItem(`${type}:${emailId}`);
}

export function deleteEmails(emailId, type, ids){
    return dbService.readItem(`${type}:${emailId}`).then(emails => {
        if (emails) {
            dbService.updateItem(`${type}:${emailId}`, emails.filter(email => !ids.includes(email.id)));
        }
    });
}

export function markEmails(emailId, type, ids){
    return dbService.readItem(`${type}:${emailId}`).then(emails => {
        if (emails) {
            dbService.updateItem(`${type}:${emailId}`, emails.map(email => {
              if(ids.includes(email.id)) email.unread = false;

              return email;
            }));
        }
    });
}

export function readLabels(emailId){
    return dbService.readItem(`${emailId}:labels`);
}

export function addUserLabels(emailId, updatedLabels){
    return dbService.readItem(`${emailId}:labels`).then(labels => {
      if (labels) dbService.updateItem(`${emailId}:labels`, updatedLabels);
      else dbService.createItem(`${emailId}:labels`, updatedLabels);
  });;
}

export function addLabelsToEmail(emailId, type, ids, labels){
    return dbService.readItem(`${type}:${emailId}`).then(emails => {
        if (emails) {
            dbService.updateItem(`${type}:${emailId}`, emails.map(email => {
              if(ids.includes(email.id)) email.labels = Array.from(new Set(labels));
              return email;
            }));
        }
    });
}
