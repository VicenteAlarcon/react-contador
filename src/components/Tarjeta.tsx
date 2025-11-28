type Props = {
    titulo: string;
    mensaje: string;
};

export function Tarjeta({ titulo, mensaje }: Props) {
    return (
        <div style={{ border: "1px solid #ccc", padding:"1rem", borderRadius:8 }}>
            <h3>{titulo}</h3>
            <p>{mensaje}</p>
        </div>
    );
}