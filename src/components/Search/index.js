import React, { useState } from 'react';
import queryString from 'query-string';
import { navigate, useLocation } from '@reach/router';
import { FaSearch } from 'react-icons/fa';
import { Button } from '../Button';
import { Input } from '../Input';
import { SearchForm } from './styles';

export function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const { search } = useLocation();
  const c = queryString.parse(search)?.c || '';
  const handleSubmit = e => {
    e.preventDefault();
    if (c) {
      navigate(
        `/all-products?s=${encodeURIComponent(
          searchTerm
        )}&c=${encodeURIComponent(c)}`
      );
    } else {
      navigate(`/all-products?s=${encodeURIComponent(searchTerm)}`);
    }
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.currentTarget.value);
        }}
      />
      <Button>
        <FaSearch />
      </Button>
    </SearchForm>
  );
}
