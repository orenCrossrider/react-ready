import chai, {expect} from 'chai';
import userStorage from '../../../src/app/localstorage/user';

chai.should();


describe('localStrorage', () => {
	let testUser = {
		username: "Username",
    	first_name: 'testFirstName',
    	last_name: 'lastFirstName' 
	}
	let testToken = "alksdn232sldknsd";

	beforeEach(() => {      
        localStorage.clear(); 
    });

	describe('setDetails', () => { 			
	    it('should store the new user details', () => {
	    	userStorage.setDetails(testUser);
	    	let userData = JSON.parse(localStorage.getItem("user"));
	    	userData.username.should.equal(testUser.username); 
	    	userData.first_name.should.equal(testUser.first_name); 
	    	userData.last_name.should.equal(testUser.last_name); 
	    }); 

	    it('should not store the new user details when user is null', () => {
	    	userStorage.setDetails(null);
	    	expect(localStorage.getItem("user")).to.be.null;
	    });
	});

	describe('getDetails', () => {
	    it('should return null when no user object is set', () => {
	    	let userData = userStorage.getDetails();
	    	expect(userData).to.be.null;
	    });  

	    it('should return user object when set', () => { 
	    	localStorage.setItem("user", JSON.stringify(testUser));
	    	let userData = userStorage.getDetails();  
	    	userData.username.should.equal(testUser.username);
	    	userData.first_name.should.equal(testUser.first_name);
	    	userData.last_name.should.equal(testUser.last_name);
	    }); 
	});

	describe('getToken', () => {   
		it('should return null when token is not set', () => {
	    	let token = userStorage.getToken();
	    	expect(token).to.be.null;
	    });  

		it('should return token when set', () => {
		 	localStorage.setItem("token", testToken);
	    	userStorage.getToken().should.be.equal(testToken);
	    });  
	});

	describe('setToken', () => {
		it('should return token when set', () => { 
			userStorage.setUserToken(testToken);
	    	expect(localStorage.getItem("token").should.be.equal(testToken))
	    }); 

	    it('should not store the new user details when user is null', () => {
	    	userStorage.setDetails(null);
	    	expect(localStorage.getItem("user")).to.be.null;
	    });
	});

	describe("isLoggedIn", () => {   
		it('should return true when username & token are set', () => {   
			localStorage.setItem("user", JSON.stringify(testUser));    
			localStorage.setItem("token", testToken);  
			expect(userStorage.isLoggedIn()).to.be.true;   
		});

		it('should return false when username is not set & token is set', () => {   
			localStorage.setItem("token", testToken); 
			expect(userStorage.isLoggedIn()).to.be.false;   
		});

		it('should return true when username is set & token is not set', () => {   
			localStorage.setItem("user", JSON.stringify(testUser));    
			expect(userStorage.isLoggedIn()).to.be.false;   
		});

	});

	describe("clear", () => {
		it('should return null for all data after clear', () => {
			localStorage.setItem("user", JSON.stringify(testUser));
			localStorage.setItem("token", testToken); 
			userStorage.clear();
			expect(localStorage.getItem("user")).to.be.null;
			expect(localStorage.getItem("token")).to.be.null;
		});
	});	
});
