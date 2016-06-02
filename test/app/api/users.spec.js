import chai, {expect} from 'chai';
import chaiAsPromised from 'chai-as-promised';
import cheerio from 'cheerio';
import env from '../../../src/environments/env';
import usersApi from '../../../src/app/api/users';
import nock from 'nock';

chai.should();
chai.use(chaiAsPromised);

describe('Users Api', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    describe('login', () => {
        let token
        let username;
        let password;

        beforeEach(() => {
            token = "alksdn232sldknsd";
            username = "Username";
            password = "12345678";
        });

        it('should login the user successfully and return a successful promise', () => {
            nock(`${env.SERVER_API_URL}`)
              .post(`/auth/login/`)
              .reply(200, {auth_token: token});

            let promise = usersApi.login(username, password);
            return Promise.all([
                promise.should.be.fulfilled,
                promise.should.eventually.have.deep.property('data.auth_token', token)
            ]);
        });

        it('should return a failed promise on server error', () => {
            nock(`${env.SERVER_API_URL}`)
              .post(`/auth/login/`)
              .reply(401, {auth_token: token});

            let promise = usersApi.login(username, password);
            return promise.should.be.rejected;
        });
        
    });

    describe('logout', () => {
        it('should delete the user session and returns a successful promise', () => {
            nock(`${env.SERVER_API_URL}`)
              .post(`/auth/logout/`)
              .reply(200, {});

            let promise = usersApi.logout();
            return Promise.all([
                promise.should.be.fulfilled,
            ]);
        });

        it('should return a failed promise on server error', () => {
            nock(`${env.SERVER_API_URL}`)
              .post(`/auth/logout/`)
              .reply(403, {});

            let promise = usersApi.logout();
            return promise.should.be.rejected;
        });
    });

    describe('get', () => {
        let user;

        beforeEach(() => {
            user = {
                id: 1,
                first_name: "test",
                last_name: "mocha",
                username: "test Username"
            }
        });

        it('should return a user details from the server', () => {
            nock(`${env.SERVER_API_URL}`)
              .get('/auth/user/')
              .reply(200, user);

            let promise = usersApi.get();
            return Promise.all([
                promise.should.be.fulfilled,
                promise.should.eventually.have.deep.property('data.id', user.id)
            ]);
        });

        it('should return a failed promise on server error', () => {
            nock(`${env.SERVER_API_URL}`)
              .get(`/users/${user.id}`)
              .reply(400, user);

            let promise = usersApi.get(user.id);
            return promise.should.be.rejected;
        });
    });
});