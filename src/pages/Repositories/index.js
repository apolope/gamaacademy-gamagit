import React, { useEddect, useEffect, useState } from 'react';
import * as S from './styled';

export default function Respositories() {
    const [ repositories, setRespositories ] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        repositoriesName = JSON.parse(repositoriesName);
        setRespositories(repositoriesName);
        localStorage.clear();
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                { repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )
                }) }
                
            </S.List>
        </S.Container>
    );
}