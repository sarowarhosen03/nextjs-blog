
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><Image
                src="https://plus.unsplash.com/premium_photo-1669819813174-ebba575c8810?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height={400} width={400}
                alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href='/postlink'>Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
