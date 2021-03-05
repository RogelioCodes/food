import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//useEffect allows u to run code only when you component is rendered for the first time
//takes two arguments, one is what function u want to run, second is how often u want to run it
//run arrow function only when component is first rendered useState(()=>{}, [])
const SearchScreen = () => {
    //console.log(props);
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        //price === '$', || '$$' ||| '$$$'
        return results.filter( result => {
            return result.price === price ;
        });
    };

    return ( 
        <>
            <SearchBar
                    term = {term} 
                    onTermChange = {setTerm}
                    onTermSubmit = { () => searchApi(term)}
            />
        {errorMessage ? <Text>{errorMessage}</Text> : null }
        
        <ScrollView>
            <ResultsList 
                results = {filterResultsByPrice('$')} 
                title = "Cost Effective" 
               
                />
            <ResultsList 
                results = {filterResultsByPrice('$$')} 
                title = "Bit Pricier" 
               
                />
            <ResultsList 
                results = {filterResultsByPrice('$$$')} 
                title = "Big Spender" 
                
                />
        </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen ; 