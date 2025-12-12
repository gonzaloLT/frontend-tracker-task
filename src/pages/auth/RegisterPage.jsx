import { PublicLayout } from '../../layout/PublicLayout'
import { RegisterForm } from '../../components/auth/RegisterForm'
import { useAuth } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'

export const RegisterPage = () => {
	const auth = useAuth()

	if (auth.isAuthenticated) {
		return <Navigate to={'/'} />
	}

	return (
		<PublicLayout>
			<RegisterForm />
		</PublicLayout>
	)
}
