import { useState, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { SearchBarProps } from '../../propTypes'

/**
 * Component to render search bar for items
 * @params SearchBarProps 
 * @returns JSX.Element 
 */
export const SearchBar = ({ search }: SearchBarProps) => {
    const [value, setValue] = useState(null)
    const router = useRouter()

    useEffect(() => {
        if (search) {
            setValue(search)
        }
    }, [])
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(value)
        router.push({
            pathname: '/items', 
            query: {
                search: value
            }
        })
    }

    return (
        <form className="search-container" onSubmit={(e)=> handleSubmit(e)}>
            <div className="search-inner">
                <div className="search-logo">
                    <Link href="/">
                        <img src="/assets/logo_ml.png" alt="/assets/logo_ml.png" />
                    </Link>
                </div>
                <div className="search-field">
                    <TextField
                        className="search-text-field"
                        placeholder="Nunca dejes de buscar"
                        variant="outlined" value={value}
                        onChange={(e) => setValue(e.target.value)}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <Button variant="text" color="default" type="submit">
                                    <img className="search-bar-img" src="/assets/ic_search.png" alt="/assets/ic_search.png" />
                                </Button>
                            ),
                        }}
                    />
                </div>
            </div>
        </form>
    )
}

export default SearchBar