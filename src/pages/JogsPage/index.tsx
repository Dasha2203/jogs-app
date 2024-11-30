import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import JogsProvider from '../../context/JogsContext';
import List from './components/List';

const JogsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, [])

  return (
    <JogsProvider>
      <Layout>
        <List />
      </Layout>
    </JogsProvider>
  )
};

export default JogsPage;