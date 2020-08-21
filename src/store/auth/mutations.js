export function auth_success (/* state */state,data) {
	state.status = 'success';
	state.token = data.token;
	//localStorage.setItem('token',token)
    state.user = data.user;
   

}


export function auth_remove (/* state */state,data) {

	state.status = '';
	state.token = ''
	//localStorage.setItem('token',token)
	state.user = '';

}
