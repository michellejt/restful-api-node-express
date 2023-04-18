import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from "../controllers/crmController"

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {     
        //middleware
        console.log(`Request from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    }, getContacts)

    .post(addNewContact);

    app.route('/contact/:contactId')
//get specific conatact
.get(getContactWithId)

//updat a conatact
    .put(updateContact)

    //to delete a contact
    .delete(deleteContact)
}
export default routes;