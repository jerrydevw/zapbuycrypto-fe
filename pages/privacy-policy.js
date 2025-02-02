import Head from 'next/head';

const PrivacyPolicy = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <Head>
                <title>Política de Privacidade</title>
            </Head>

            <h1 className="text-4xl font-bold mb-2">Política de Privacidade</h1>
            <p className="text-sm text-gray-500 mb-6">Última Atualização: 31-01-2025</p>

            <p>
                Esta Política de Privacidade explica como tratamos seus dados ao utilizar nosso serviço para integração com corretoras de criptomoedas. Nosso foco é fornecer uma solução segura, transparente e que respeite a sua privacidade.
            </p>

            <h2 className="text-2xl font-semibold mt-6">1. Dados Pessoais</h2>
            <p className="mb-4">
                Não coletamos, armazenamos ou processamos qualquer dado pessoal identificável dos usuários.
            </p>

            <h2 className="text-2xl font-semibold mt-6">2. Dados Necessários para Operações</h2>
            <p className="mb-4">
                Utilizamos apenas os seguintes dados fornecidos pelos usuários para a execução das operações:
            </p>
            <ul className="list-disc ml-5">
                <li>Token de Acesso Gerado pela Corretora.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">3. Criptografia e Segurança</h2>
            <p>
                Utilizamos padrões avançados de criptografia (AES-256) para proteger dados sensíveis, incluindo tokens de acesso fornecidos pelas corretoras. Garantimos a segurança desses dados em repouso e em trânsito.
            </p>

            <h2 className="text-2xl font-semibold mt-6">4. Direitos do Usuário</h2>
            <ul className="list-disc ml-5">
                <li>Direito de solicitar a exclusão de dados armazenados.</li>
                <li>Direito de revogar o token de acesso a qualquer momento.</li>
                <li>Direito de transparência sobre o uso dos dados.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">5. Contato</h2>
            <p>
                Para dúvidas ou solicitações relacionadas a esta Política de Privacidade, entre em contato conosco através de:
            </p>
            <ul className="list-disc ml-5">
                <li>E-mail: zeroumbin@gmail.com</li>
                <li>Telefone: 47 98925-6286</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6">6. Alterações na Política de Privacidade</h2>
            <p>
                Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Notificaremos os usuários sobre alterações significativas através de um aviso em nosso site.
            </p>

            <h2 className="text-2xl font-semibold mt-6">7. Termos Adicionais sobre Segurança</h2>
            <p>
                Para maximizar a segurança, recomendamos que os usuários protejam seus dispositivos com senhas fortes e não compartilhem seus tokens de acesso com terceiros.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
