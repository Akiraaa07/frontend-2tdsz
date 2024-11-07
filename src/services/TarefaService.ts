import AsyncStorage from '@react-native-community/async-storage';

export const adicionarTarefaApi = async (tarefa: string): Promise<void> => {
  const token = await AsyncStorage.getItem('token');

  if (!token) {
    throw new Error('Token não encontrado!');
  }

  const response = await fetch('http://localhost:3000/api/tarefas', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tarefa }), 
  });

  if (!response.ok) {
    throw new Error('Erro ao adicionar tarefa');
  }
};