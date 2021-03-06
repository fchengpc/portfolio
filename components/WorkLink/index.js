import Global from '../Global';

/**
 * @param {string} url
 * @param {function} onClick  The function to be run when link is clicked
 * @param {string} styles  Either "Link" or "Link Link--inverted"
 * @param {string} children
 */
const WorkLink = ({ url, onClick, styles, children }) => (
  <div>
    <a
      className={ styles }
      href={url}
      onClick={ onClick }>{ children }
    </a>
    <Global />
    <style jsx>{`
      .Link {
        background-color: var(--white);
        border: 1px solid var(--black);
        display: block;
        font-size: 1.2rem;
        margin-top: 1.2rem;
        transition: all 300ms ease;
        padding: 0.7rem 1rem 0.5rem;
        position: relative;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;
      }

      .Link--inverted {
        background-color: var(--black);
        border: 1px solid var(--white);
      }

      .Link:hover {
        background-color: var(--black);
        color: var(--white);
      }

      .Link--inverted:hover {
        background-color: var(--white);
        color: var(--black);
      }

      @media screen and (min-width: 600px) {
        .Link {
          width: 12rem;
        }
      }
    `}
    </style>
  </div>
);

export default WorkLink;
