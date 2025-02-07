
interface ContactInfoProps {
    title: string;
    children: React.ReactNode;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ title, children }) => (
    <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl text-black">{title}</h3>
        {children}
    </div>
);

export default ContactInfo;