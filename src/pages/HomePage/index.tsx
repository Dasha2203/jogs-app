import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BearIcon from '../../assets/icons/BearIcon';
import Button from '../../components/buttons/Button';
import Layout from '../../components/layout/Layout';
import './styles.css';
import { signin } from '../../api/auth/auth';

const HomePage = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleClick() {
    try {
      const token = await signin();
      localStorage.setItem('token', token);
      navigate('/jogs');

    } catch (error) {
      setError((error as Error).message)
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/jogs');
    }
  }, [])

  return (
    <Layout type={'simple'}>
      <div className="let-me-section">
        <BearIcon className="let-me-section__img" />
        <Button as="button" onClick={handleClick}>Let me in</Button>
        {error && <span className="error">{error}</span>}
      </div>
    </Layout>
  )
};

export default HomePage;