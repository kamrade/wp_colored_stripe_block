/**
 * BLOCK: colored-stripe-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-colored-stripe-block', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __( 'colored-stripe-block - CGB Block' ), // Block title.
  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [
    __( 'colored-stripe-block — CGB Block' ),
    __( 'CGB Example' ),
    __( 'create-guten-block' ),
  ],
  attributes: {
    block01: {
      type:   'string',
    },
    block02: {
      type:   'string'
    },
    block03: {
      type:   'string'
    },
    block04: {
      type:   'string'
    },
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: function( props ) {

    function updateContent(event, block) {
      props.setAttributes({ [block]: event.target.value });
    }

    // Creates a <p class='wp-block-cgb-block-colored-stripe-block'></p>.
    return (
      <div className={ props.className }>

      <div className="form-group">
        <label className="d-block">
          Block 01:
          <input
            className="form-control"
            value={props.attributes.block01}
            onChange={() => updateContent(event, 'block01') }
            type="text" />
        </label>
      </div>

      <div className="form-group">
        <label className="d-block">
          Block 02:
          <input
            className="form-control"
            value={props.attributes.block02}
            onChange={() => updateContent(event, 'block02') }
            type="text" />
        </label>
      </div>

      <div className="form-group">
        <label className="d-block">
          Block 03:
          <input
            className="form-control"
            value={props.attributes.block03}
            onChange={() => updateContent(event, 'block03') }
            type="text" />
        </label>
      </div>

      <div className="form-group">
        <label className="d-block">
          Block 04:
          <input
            className="form-control"
            value={props.attributes.block04}
            onChange={() => updateContent(event, 'block04') }
            type="text" />
        </label>
      </div>

      </div>
    );
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function( props ) {

    return (
      <div className="colored-stripe-block">
        <div className="row">
          <div className="col-md-3">
            <div className="colored-stripe-block-section">{ props.attributes.block01 }</div>
          </div>
          <div className="col-md-3">
            <div className="colored-stripe-block-section">{ props.attributes.block02 }</div>
          </div>
          <div className="col-md-3">
            <div className="colored-stripe-block-section">{ props.attributes.block03 }</div>
          </div>
          <div className="col-md-3">
            <div className="colored-stripe-block-section">{ props.attributes.block04 }</div>
          </div>
        </div>
      </div>
    );
  },
} );
