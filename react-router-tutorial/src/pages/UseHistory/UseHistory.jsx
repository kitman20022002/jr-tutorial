import { useNavigate  } from 'react-router-dom';

export function UseHistory() {
    const navigate  = useNavigate();
    function handleClick() {
        navigate("/");
    }

    return (
        <button type="button" onClick={handleClick}>
            Go home
        </button>
    );
}
