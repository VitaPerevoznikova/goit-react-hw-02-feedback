import css from './Sections.module.css'

export const Section = ({ title, children }) => {
    return <div>
        <h2 className={css.mainTitle}>{title}</h2>
        {children}

    </div>
}