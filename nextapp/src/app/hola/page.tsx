import HelloBtn from "@/components/Hello";

export default function Hola() {
    return (
        <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h1>HOLA MUNDO</h1>
            <HelloBtn />
        </div>
    );
}