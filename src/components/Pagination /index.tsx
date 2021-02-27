import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CicleView, ContainerNumbers, ContainerPaignation, NumberText, ArrowLeft, ArrowRight } from './styles';
import { IPaginationProps } from './types';


const Pagination: React.FC<IPaginationProps> = ({
    offset,
    totalPage,
    maxCicleButton,
    limit,
    handlePage
}) => {

    function getNumbersPage() {
        const pageNumber = Math.floor(offset / limit);
        const firstPage = Math.floor(pageNumber / maxCicleButton) * maxCicleButton;
        let lastPage = firstPage + maxCicleButton;

        if (lastPage > Math.ceil(totalPage / limit)) {
            lastPage = Math.ceil(totalPage / limit)
        }

        const itens = [];
        for (let index = firstPage; index < lastPage; index++) {
            itens.push(index)
        }

        return itens;
    }

    function renderNumberPageButton(number: number) {
        const active = offset === (number * limit);
        return (
            <TouchableOpacity
                key={String(number)}
                onPress={() => { handlePage(number * limit) }}
            >
                <CicleView isActive={active}>
                    <NumberText isActive={active}>{number + 1}</NumberText>
                </CicleView>
            </TouchableOpacity>
        )
    }

    function handlePrevious() {
        if (offset - limit < 0) return;
        handlePage(offset - limit)
    }

    function handleNext() {
        if ((totalPage - 1) - offset < limit) return;
        handlePage(offset + limit)
    }

    const numbers = getNumbersPage();

    if(!numbers.length) return null;
    
    return (
        <ContainerPaignation>
            <ArrowLeft onPress={handlePrevious} />
            <ContainerNumbers>
                {numbers.map((number) => renderNumberPageButton(number))}
            </ContainerNumbers>
            <ArrowRight onPress={handleNext} />
        </ContainerPaignation>
    );
}

export default Pagination;