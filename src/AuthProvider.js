import React, { createContext, useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from './Supabase';

const AuthContext = createContext({});

const AuthProvider = (props) => {
	const [user, setUser] = useState(null);
	const [session, setSession] = useState(null);

	useEffect(() => {
		const session = supabase.auth.session();
		setSession(session);
		const { data } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				console.log(`Supabase auth event: ${event}`);
				setSession(session);
			}
		);
		return () => {
			data.unsubscribe();
		};
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				session,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };